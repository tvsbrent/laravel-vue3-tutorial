<template>
  <Box as="li">
    <Link :href="route('listings.show', { listing: listing.id })">
      <div class="flex items-center gap-2">
        <Price :price="listing.price" class="text-2xl font-bold" />
        <div class="text-xs text-gray-500"><Price :price="monthlyPayment" /> p/m</div>
      </div>
      <ListingInfo :listing="listing" class="text-lg" />
      <ListingAddress :listing="listing" class="text-gray-500" />
    </Link>
    <Link :href="route('listings.edit', { listing: listing.id })"> Edit </Link>
    <Link
      :href="route('listings.destroy', { listing: listing.id })"
      method="delete"
      as="button">
      Delete
    </Link>
  </Box>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  import { Link } from '@inertiajs/vue3';
  import { route } from 'ziggy-js';

  import Box from '@/Components/UI/Box.vue';
  import ListingAddress from '@/Components/ListingAddress.vue';
  import ListingInfo from '@/Components/ListingInfo.vue';
  import Price from '@/Components/Price.vue';
  import { useMonthlyPayment } from '@/Composable/useMonthlyPayment';

  const props = defineProps<{
    listing: Listing;
  }>();

  const { monthlyPayment } = useMonthlyPayment(
    props.listing.price,
    2.5,
    25,
  );
</script>
