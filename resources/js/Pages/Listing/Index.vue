<template>
  <div>
    <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <ListingView
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing" />
    </ul>
  </div>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  import ListingView from '@/Pages/Listing/Index/Components/Listing.vue';

  defineProps<{
    listings: Listing[];
  }>();
</script>
