<template>
  <div>
    <span class="font-bold">{{ listing.beds }}</span> bds
    <span class="text-gray-400"> | </span>
    <span class="font-bold">{{ listing.baths }}</span> ba
    <span class="text-gray-400"> | </span>
    <span class="font-bold">{{ listing.area }}</span> sqft
  </div>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  defineProps<{ listing: Listing }>();
</script>
