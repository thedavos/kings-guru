<script setup lang="ts">
import { useBreadcrumbs } from '@/home/composables/useBreadcrumbs';

const { breadcrumbs } = useBreadcrumbs();
</script>

<script lang="ts">
export default {
  name: 'HomeLayout',
};
</script>

<template>
  <div class="home-layout">
    <UMain class="min-h-screen">
      <UHeader
        :ui="{ wrapper: 'bg-transparent static' }"
      >
        <template
          #logo
        >
          GuruKings
        </template>
      </UHeader>
      <UContainer
        :ui="{ constrained: 'max-w-5xl' }"
        class="flex flex-col justify-center"
      >
        <UBreadcrumb
          :links="breadcrumbs"
          divider="/"
          class="my-10"
        />
        <slot />
      </UContainer>
    </UMain>
    <!--    <UContainer -->
    <!--      :ui="{ constrained: 'max-w-5xl' }" -->
    <!--      class="min-h-screen flex flex-col justify-center" -->
    <!--    > -->
    <!--      <UBreadcrumb -->
    <!--        :links="breadcrumbs" -->
    <!--        divider="/" -->
    <!--        class="my-10" -->
    <!--      /> -->
    <!--      <slot /> -->
    <!--    </UContainer> -->
  </div>
</template>

<style scoped lang="postcss">
.home-layout {
  background: url("@/assets/theming/kings-theme-1.png") no-repeat center center fixed;
  background-size: cover;
}
</style>
