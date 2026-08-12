import { supabase, BUCKET_NAME, VIDEO_FILENAME } from '../lib/supabase';

const DB_NAME = 'GTA6LandingPageDB';
const STORE_NAME = 'videos';
const VIDEO_KEY = 'fixedHeroVideo';

export async function saveVideoToStorage(file: File): Promise<string> {
  // 1. If Supabase is configured, upload directly to Supabase Storage Bucket
  if (supabase) {
    try {
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(VIDEO_FILENAME, file, {
          cacheControl: '3600',
          upsert: true,
          contentType: file.type || 'video/mp4',
        });

      if (!error && data) {
        const { data: publicData } = supabase.storage
          .from(BUCKET_NAME)
          .getPublicUrl(VIDEO_FILENAME);

        if (publicData?.publicUrl) {
          return `${publicData.publicUrl}?t=${Date.now()}`;
        }
      } else if (error) {
        console.warn('Supabase Storage upload warning:', error.message);
      }
    } catch (err) {
      console.error('Failed to upload to Supabase Storage:', err);
    }
  }

  // 2. Try saving to IndexedDB for local persistence
  try {
    if (typeof window !== 'undefined' && 'indexedDB' in window && window.indexedDB) {
      await new Promise<void>((resolve, reject) => {
        try {
          const request = indexedDB.open(DB_NAME, 1);
          request.onupgradeneeded = (e: any) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
              db.createObjectStore(STORE_NAME);
            }
          };
          request.onsuccess = (e: any) => {
            const db = e.target.result;
            const tx = db.transaction(STORE_NAME, 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            store.put(file, VIDEO_KEY);
            tx.oncomplete = () => resolve();
            tx.onerror = () => reject(tx.error);
          };
          request.onerror = () => reject(request.error);
        } catch (err) {
          reject(err);
        }
      });
    }
  } catch (err) {
    console.warn('IndexedDB not supported or restricted:', err);
  }

  // 3. Try uploading to local server endpoint
  try {
    await fetch('/api/upload-video', {
      method: 'POST',
      body: file,
    });
  } catch (err) {
    console.warn('Server upload optional fallback error:', err);
  }

  return URL.createObjectURL(file);
}

export async function getSavedVideoFromStorage(): Promise<string | null> {
  // 1. Check Supabase Storage if configured
  if (supabase) {
    try {
      const { data: publicData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(VIDEO_FILENAME);

      if (publicData?.publicUrl) {
        // Test if file exists on Supabase
        const res = await fetch(publicData.publicUrl, { method: 'HEAD' });
        if (res.ok) {
          return publicData.publicUrl;
        }
      }
    } catch (err) {
      console.warn('Could not check video on Supabase Storage:', err);
    }
  }

  // 2. Check IndexedDB
  try {
    if (typeof window !== 'undefined' && 'indexedDB' in window && window.indexedDB) {
      const blob = await new Promise<Blob | null>((resolve) => {
        try {
          const request = indexedDB.open(DB_NAME, 1);
          request.onupgradeneeded = (e: any) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
              db.createObjectStore(STORE_NAME);
            }
          };
          request.onsuccess = (e: any) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
              resolve(null);
              return;
            }
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const getReq = store.get(VIDEO_KEY);
            getReq.onsuccess = () => {
              resolve(getReq.result || null);
            };
            getReq.onerror = () => resolve(null);
          };
          request.onerror = () => resolve(null);
        } catch (err) {
          resolve(null);
        }
      });

      if (blob) {
        return URL.createObjectURL(blob);
      }
    }
  } catch (err) {
    console.warn('Error fetching video from IndexedDB:', err);
  }

  return null;
}
