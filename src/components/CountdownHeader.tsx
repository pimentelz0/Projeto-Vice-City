import React, { useState, useEffect } from 'react';

export const CountdownHeader: React.FC = () => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [hoursLeft, setHoursLeft] = useState<number>(0);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      let launchYear = now.getFullYear();
      let targetDate = new Date(launchYear, 10, 19, 0, 0, 0); // 19 de Novembro

      // If November 19 of current year has passed, target next year
      if (now > targetDate) {
        targetDate = new Date(launchYear + 1, 10, 19, 0, 0, 0);
      }

      const diffMs = targetDate.getTime() - now.getTime();
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      setDaysLeft(days);
      setHoursLeft(hours);
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-gradient-to-r from-purple-900 via-pink-700 to-purple-900 border-b border-pink-400 z-40 flex items-center justify-center px-4 shadow-md text-xs sm:text-sm font-semibold tracking-wide text-white">
      <div className="flex items-center gap-2">
        <span className="text-base">⏳</span>
        <span>
          Faltam <strong className="text-amber-300 font-bold underline decoration-pink-300/60">{daysLeft} dias</strong> e <strong className="text-amber-300 font-bold">{hoursLeft}h</strong> pro lançamento de GTA VI (19/11)
        </span>
      </div>
    </div>
  );
};
