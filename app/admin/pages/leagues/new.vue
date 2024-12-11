<script setup lang="ts">
definePageMeta({
  layout: 'admin-layout',
});
</script>

<script lang="ts">
export default {
  name: 'AdminCreateLeague',
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        title="Crea una liga"
      >
        <template #right />
      </UDashboardNavbar>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style scoped lang="postcss">

</style>
