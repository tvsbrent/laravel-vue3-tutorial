<template>
  <span
    >{{ listing.street_nr }} {{ listing.street }}, {{ listing.city }} for ${{
      listing.price
    }}</span
  >
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  defineProps<{ listing: Listing }>();
</script>
