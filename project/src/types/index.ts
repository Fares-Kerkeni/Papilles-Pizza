export interface MenuOption {
  name: string;
  price?: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  options?: MenuOption[];
  specialNote?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}