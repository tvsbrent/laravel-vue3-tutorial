<template>
  <h1 class="text-3xl mb-4">Your Listings</h1>
  <section class="mb-8">Filters</section>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-2">
    <Box v-for="listing in listings" :key="listing.id">
      <div
        class="flex flex-col md:flex-row gap-2 md:item-center justify-between">
        <div>
        <div class="xl:flex items-center gap-2">
          <Price :price="listing.price" class="text-2xl font-medium" />
          <ListingInfo :listing="listing" />
        </div>
        <ListingAddress :listing="listing" />
        </div>
        <div class="flex items-center gap-1 text-gray-600 dark:text-gray-300">
          <Link class="btn-outline text-xs font-medium">Preview</Link>
          <Link class="btn-outline text-xs font-medium">Edit</Link>
          <Link class="btn-outline text-xs font-medium">Delete</Link>
        </div>
      </div>
    </Box>
  </section>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  import { Link } from '@inertiajs/vue3';

  import Price from '@/Components/Price.vue';
  import Box from '@/Components/UI/Box.vue';
  import ListingInfo from '@/Components/ListingInfo.vue';
  import ListingAddress from '@/Components/ListingAddress.vue';

    defineProps<{ listings: Listing[] }>();
</script>
