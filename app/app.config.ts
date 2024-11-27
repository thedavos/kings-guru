export default defineAppConfig({
  ui: {
    primary: 'sky',
    gray: 'cool',
    tooltip: {
      default: {
        openDelay: 500,
      },
    },
    container: {
      constrained: 'max-w-2xl',
    },
    breadcrumb: {
      label: 'cursor-pointer',
    },
    card: {
      header: {
        base: 'flex flex-wrap items-center justify-between',
      },
      body: {
        base: 'space-y-4',
      },
    },
    dropdown: {
      popper: {
        strategy: 'absolute',
      },
    },
  },
});
