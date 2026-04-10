
export interface NavItem {
  label: string;
  key: string;
  href?: string;
  active?: boolean;
  children?: NavItem[];
}