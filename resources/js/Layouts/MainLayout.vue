<template>
  <Link :href="route('listings.index')" preserve-state>Listings</Link>&nbsp;
  <Link :href="route('listings.create')" preserve-state>New Listing</Link>
  <div v-if="flashMessage" class="success">
    {{ flashMessage }}
  </div>
  <slot></slot>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { Link, usePage } from '@inertiajs/vue3';
  import { route } from 'ziggy-js';

  const page = usePage<{ flash: { success: string } }>();
  const flashMessage = computed(() => page.props.flash?.success);
</script>

<style scoped>
  .success {
    background-color: green;
    color: white;
  }
</style>
