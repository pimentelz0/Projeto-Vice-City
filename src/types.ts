export interface ModuleItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  icon?: string;
  isFastAction?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role?: string;
  avatarPlaceholder: string;
  rating: number;
  resultBadge?: string;
  content: string;
  proofImageUrl?: string;
  dashboardProof?: {
    lastUpdate: string;
    totalAmount: string;
    estimatedRewards: string;
    views: string;
    rpm: string;
    timestamp: string;
  };
}

export interface ObjectionItem {
  id: string;
  question: string;
  answer: string;
}
