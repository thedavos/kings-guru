<script setup lang="ts">
import { useDashboard } from '@/admin/composables/useDashboard';
import { sidebarLinks } from '@/admin/settings/sidebarLinks';

const route = useRoute();
const appConfig = useAppConfig();
const { isHelpSlideoverOpen } = useDashboard();

const footerLinks = [{
  label: 'Invite people',
  icon: 'i-heroicons-plus',
  to: '/settings/members',
}, {
  label: 'Help & Support',
  icon: 'i-heroicons-question-mark-circle',
  click: () => isHelpSlideoverOpen.value = true,
}];

const groups = [{
  key: 'links',
  label: 'Go to',
  commands: sidebarLinks.map(link => ({ ...link, shortcuts: link.tooltip?.shortcuts })),
}, {
  key: 'code',
  label: 'Code',
  commands: [{
    id: 'source',
    label: 'View page source',
    icon: 'i-simple-icons-github',
    click: () => {
      window.open(`https://github.com/nuxt-ui-pro/dashboard/blob/main/pages${route.path === '/' ? '/index' : route.path}.vue`, '_blank');
    },
  }],
}];

const defaultColors = ref(['green', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet'].map(color => ({ label: color, chip: color, click: () => appConfig.ui.primary = color })));
const colors = computed(() => defaultColors.value.map(color => ({ ...color, active: appConfig.ui.primary === color.label })));
</script>

<script lang="ts">
export default {
  name: 'AdminLayout',
};
</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="250"
      :resizable="{ min: 200, max: 300 }"
      collapsible
    >
      <UDashboardNavbar
        class="!border-transparent"
        :ui="{ left: 'flex-1' }"
      >
        <template #left>
          GuruKings
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>
        <template #header>
          <UDashboardSearchButton />
        </template>

        <UDashboardSidebarLinks :links="sidebarLinks" />

        <UDivider />

        <UDashboardSidebarLinks
          :links="[{ label: 'Ligas', draggable: true, children: colors }]"
          @update:links="colors => defaultColors = colors"
        />

        <div class="flex-1" />

        <UDashboardSidebarLinks :links="footerLinks" />

        <UDivider class="sticky bottom-0" />

        <template #footer>
          <!-- ~/components/UserDropdown.vue -->
          <!--                    <UserDropdown /> -->
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <!--    &lt;!&ndash; ~/components/HelpSlideover.vue &ndash;&gt; -->
    <!--    <HelpSlideover /> -->
    <!--    &lt;!&ndash; ~/components/NotificationsSlideover.vue &ndash;&gt; -->
    <!--    <NotificationsSlideover /> -->

    <ClientOnly>
      <LazyUDashboardSearch :groups="groups" />
    </ClientOnly>
  </UDashboardLayout>
</template>
