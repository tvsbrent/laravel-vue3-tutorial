<template>
  <div>
    <h1>Listings</h1>
    <ul>
      <li v-for="listing in listings" :key="listing.id">
        <Link :href="route('listings.show', { listing: listing.id })">
          <ListingAddress :listing="listing" />
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
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  import { Link } from '@inertiajs/vue3';
  import { route } from 'ziggy-js';

  import ListingAddress from '@/Components/ListingAddress.vue';

  // Import the route helper if available globally
  // If using Ziggy, this import path may differ

  defineProps<{
    listings: Listing[];
  }>();
</script>
