
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Achievement {
  id: string;
  name: string;
  award: string;
  image: string;
}

export interface Highlight {
  title: string;
  image: string;
  description: string;
}
