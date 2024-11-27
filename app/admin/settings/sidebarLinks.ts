import type { DashboardSidebarLink } from '#ui-pro/types';

export const sidebarLinks: DashboardSidebarLink[] = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
    tooltip: {
      text: 'Home',
      shortcuts: ['G', 'H'],
    },
  },
  {
    label: 'Jugadores',
    icon: 'i-heroicons-user-group',
    to: '/players',
    tooltip: {
      text: 'Jugadores',
      shortcuts: ['G', 'U'],
    },
  },
];
