//import { HomeIcon, UsersIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

import type { NavItem } from "../types/navItem";

export const MASTER_NAVIGATION: NavItem[] = [
  {
    key: 'dashboard',
    label: 'Inicio',
    active: true,
    children: [
      { key: 'dashboard', label: 'Dashboard', href: '/dashboard' },
    ]
  },
  {
    key: 'partners',
    label: 'Socios',
    active: false,
    children: [
      { key: 'dashboard', label: 'Dashboard', href: '/partners/dashboard' },
      { key: 'franchise-group', label: 'Franquicias', href: '/partners/franchise-group' },
    ],
  },
]; 