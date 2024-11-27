import { createResolver } from '@nuxt/kit';
import type { NuxtPage } from '@nuxt/schema';

const adminPages = [
  {
    name: 'dashboard',
    path: '/admin',
    file: 'pages/index.vue',
  },
] as NuxtPage[];

export const setAdminPages = (pages: NuxtPage[]) => {
  const resolver = createResolver(import.meta.url);

  adminPages.forEach((page) => {
    page.file = resolver.resolve(page.file as string);
    pages.push(page);
  });
};
