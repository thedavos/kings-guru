import { createResolver } from '@nuxt/kit';
import type { NuxtPage } from '@nuxt/schema';

const resolver = createResolver(import.meta.url);

const adminPages = [
  {
    name: 'dashboard',
    path: '/admin',
    file: resolver.resolve('pages/index.vue'),
  },
  {
    name: 'leagues',
    path: '/admin/leagues',
    file: resolver.resolve('pages/leagues/index.vue'),
  },
  {
    name: 'leagues-new',
    path: '/admin/leagues/new',
    file: resolver.resolve('pages/leagues/new.vue'),
  },
] as NuxtPage[];

export const setAdminPages = (pages: NuxtPage[]) => {
  adminPages.forEach((page) => {
    pages.push(page);
  });
};
