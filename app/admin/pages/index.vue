<script setup lang="ts">
import { items as dropdownItems } from '@/admin/settings/navDropdownItems';

definePageMeta({
  layout: 'admin-layout',
});
</script>

<script lang="ts">
export default {
  name: 'AdminHome',
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Home">
        <template #right>
          <UDropdown
            :items="dropdownItems"
          >
            <UButton
              icon="i-heroicons-plus"
              size="md"
              class="rounded-full"
            />
          </UDropdown>
        </template>
      </UDashboardNavbar>

      <!--      <UDashboardPanelContent /> -->
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style scoped lang="postcss">

</style>
