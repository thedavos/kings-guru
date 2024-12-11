<script setup lang="ts">
import { useLeagues } from '@/shared/composables/useLeagues';

definePageMeta({
  layout: 'admin-layout',
});

const { getLeagues, leagues, size } = useLeagues();

const q = ref('');
const input = ref<{ input: HTMLInputElement }>();

getLeagues();

defineShortcuts({
  '/': () => {
    input.value?.input?.focus();
  },
});
</script>

<script lang="ts">
export default {
  name: 'AdminLeagues',
};
</script>

<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar
        title="Ligas"
        :badge="size"
      >
        <template #right>
          <UInput
            ref="input"
            v-model="q"
            icon="i-heroicons-funnel"
            autocomplete="off"
            placeholder="Filtra ligas..."
            class="hidden lg:block"
            @keydown.esc="$event.target.blur()"
          >
            <template #trailing>
              <UKbd value="/" />
            </template>
          </UInput>

          <UButton
            label="Nueva Liga"
            trailing-icon="i-heroicons-plus"
            color="gray"
            :to="{ name: 'leagues-new' }"
          />
        </template>
      </UDashboardNavbar>

      <UDashboardCard
        v-for="league in leagues"
        :key="league.uuid"
        :title="league.name"
        :description="league.logo"
      >
        <img :src="league.logo">
      </UDashboardCard>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<style scoped lang="postcss">

</style>
