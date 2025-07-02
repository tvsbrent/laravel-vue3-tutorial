<template>
  <header
    class="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 w-full">
    <div class="container mx-auto">
      <nav class="p-4 flex items-center justify-between">
        <div class="text-lg font-medium">
          <Link :href="route('listings.index')">Listings</Link>&nbsp;
        </div>
        <div
          class="text-xl text-indigo-600 dark:text-indigo-300 font-bold text-center">
          <Link :href="route('listings.index')">My Project</Link>&nbsp;
        </div>
        <div class="text-lg font-medium">
          <Link
            :href="route('listings.create')"
            class="btn-primary"
            >+ New Listing</Link
          >&nbsp;
        </div>
      </nav>
    </div>
  </header>
  <main class="container mx-auto p-4 w-full">
    <div
      v-if="flashMessage"
      class="mb-4 border rounded-md shadow-sm border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900 p-2">
      {{ flashMessage }}
    </div>
    <slot></slot>
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { Link, usePage } from '@inertiajs/vue3';
  import { route } from 'ziggy-js';

  const page = usePage<{ flash: { success: string } }>();
  const flashMessage = computed(
    () => page.props.flash?.success,
  );
</script>
