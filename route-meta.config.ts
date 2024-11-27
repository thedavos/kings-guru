import type { NuxtPage } from '@nuxt/schema';
import type { HomeBreadcrumb } from '@/home/composables/useBreadcrumbs';

type RouteMetaRecord = Record<string, HomeBreadcrumb>;

const routeMeta: RouteMetaRecord = {
  index: {
    label: 'HOME',
    breadcrumb: 'Home',
  },
  lineups: {
    label: 'CREA TU PLANTILLA',
    breadcrumb: 'Lineups',
    parent: '/',
  },
};

export function setRoutesMeta(page: NuxtPage[]) {
  page.forEach((page) => {
    if (page.name && (page.name in routeMeta)) {
      const meta = routeMeta[page.name as keyof RouteMetaRecord];
      page.meta = { ...page.meta, ...meta };
    }
  });
}

export default routeMeta;
