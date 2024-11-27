import { fileURLToPath } from 'node:url';
import { setRoutesMeta } from './route-meta.config';
import { setAdminPages } from './app/admin/admin.routes';

export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxthub/core', '@nuxt/ui', '@nuxt/fonts', 'nuxt-auth-utils', '@nuxt/eslint'],

  devtools: {
    enabled: true,
  },

  ui: {},

  alias: {
    server: fileURLToPath(new URL('./server/', import.meta.url)),
    root: fileURLToPath(new URL('./', import.meta.url)),
  },

  future: { compatibilityVersion: 4 },

  compatibilityDate: '2024-10-20',

  nitro: {
    experimental: {
      openAPI: true,
      tasks: true,
    },
  },

  hub: {
    database: true,
    blob: true,
  },

  hooks: {
    'pages:extend'(pages) {
      setRoutesMeta(pages);
      setAdminPages(pages);
    },
  },

  // Development config
  eslint: {
    config: {
      stylistic: {
        semi: true,
        commaDangle: 'always-multiline',
      },
    },
  },
});
