export interface MemoryItem {
  id: string;
  image: string;
  title: string;
  category: 'portraits' | 'moments' | 'aesthetic' | 'traditional';
  caption: string;
  songInspiration?: string;
  year?: string;
}

export interface SurpriseGift {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  code: string;
}

export interface WishNote {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  color: string;
  isCustom?: boolean;
}
