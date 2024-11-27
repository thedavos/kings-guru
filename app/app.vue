<script setup>
const { loggedIn } = useUserSession();

watch(loggedIn, () => {
  if (!loggedIn.value) {
    navigateTo('/');
  }
});

useHead({
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', href: '/icon.png' }],
});

useSeoMeta({
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  title: 'Gurú Kings',
  description:
    'El gurú de la Kings League. Todo acerca de los jugadores de la Kings League como alineaciones, curiosidades, etc.',
  ogImage: '/social-image.png',
  twitterImage: '/social-image.png',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <NuxtLoadingIndicator />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<style lang="postcss">
body {
  @apply font-sans text-gray-950 bg-gradient-to-t from-blue-800 to-cool-950 dark:bg-gray-950 dark:text-gray-50;
}
</style>
