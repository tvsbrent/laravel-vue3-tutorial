import { createInertiaApp } from '@inertiajs/vue3';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { ZiggyVue } from 'ziggy-js';

import MainLayout from '@/Layouts/MainLayout.vue';

createInertiaApp({
  resolve: (name: string) => {
    const pages = import.meta.glob<{ default: DefineComponent }>(
      './Pages/**/*.vue',
      { eager: true },
    );
    const page = pages[`./Pages/${name}.vue`];
    page.default.layout ??= MainLayout;

    return page.default;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
      .mount(el);
  },
});
