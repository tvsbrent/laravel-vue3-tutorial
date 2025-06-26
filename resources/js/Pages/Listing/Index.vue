<template>
  <div>
    <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <Box as="li" v-for="listing in listings" :key="listing.id">
        <Link :href="route('listings.show', { listing: listing.id })">
          <Price :price="listing.price" class="text-2xl font-bold"/>
          <ListingInfo :listing="listing" class="text-lg"/>
          <ListingAddress :listing="listing" class="text-gray-500"/>
        </Link>
        <Link :href="route('listings.edit', { listing: listing.id })">
          Edit
        </Link>
        <Link
          :href="route('listings.destroy', { listing: listing.id })"
          method="delete"
          as="button">
          Delete
        </Link>
      </Box>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  import { Link } from '@inertiajs/vue3';
  import { route } from 'ziggy-js';

  import Box from '@/Components/UI/Box.vue';
  import ListingAddress from '@/Components/ListingAddress.vue';
  import ListingInfo from '@/Components/ListingInfo.vue';
  import Price from '@/Components/Price.vue';

  defineProps<{
    listings: Listing[];
  }>();
</script>
