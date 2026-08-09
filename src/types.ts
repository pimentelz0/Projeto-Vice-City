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
  avatarPlaceholder: string;
  rating: number;
  content: string;
}

export interface ObjectionItem {
  id: string;
  question: string;
  answer: string;
}
