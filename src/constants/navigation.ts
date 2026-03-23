//import { HomeIcon, UsersIcon, ChartBarIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

import type { NavItem } from "../types/navItem";

export const MASTER_NAVIGATION: NavItem[] = [
    { label: 'Dashboard', href: '/dashboard', key: 'dashboard' },
    { label: 'Socios', href: '/partners', key: 'partners' },
    { label: 'Jugadores', href: '/players', key: 'players' },
];