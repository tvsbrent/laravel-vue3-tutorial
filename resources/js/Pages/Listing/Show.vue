<template>
  <div>
    <ListingAddress :listing="listing" />
  </div>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  import ListingAddress from '@/Components/ListingAddress.vue';

  defineProps<{ listing: Listing }>();
</script>
