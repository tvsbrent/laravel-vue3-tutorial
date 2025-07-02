<template>
  <Filters :filters="filters" />
  <div>
    <ul class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <ListingView
        v-for="listing in listings.data"
        :key="listing.id"
        :listing="listing" />
    </ul>
    <div
      v-if="listings.data.length"
      class="w-full flex justify-center mt-4 mb-4">
      <Pagination :links="listings.links" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Listing, ListingFilters } from '@/types';

  import ListingView from '@/Pages/Listing/Index/Components/Listing.vue';
  import Filters from '@/Pages/Listing/Index/Components/Filters.vue';
  import Pagination from '@/Components/UI/Pagination.vue';

  defineProps<{
    listings: {
      links: { url: string; label: string; active: boolean }[];
      data: Listing[];
    };
    filters: ListingFilters;
  }>();
</script>
