<template>
  <form @submit.prevent="filter">
    <div class="mb-8 mt-4 flex flex-wrap gap2">
      <div class="flex flex-nowrap items-center">
        <input
          v-model.number="filterForm.priceFrom"
          class="input-filter-l w-28"
          type="text"
          placeholder="Priced from" />
        <input
          v-model.number="filterForm.priceTo"
          class="input-filter-r w-28"
          type="text"
          placeholder="Priced to" />
      </div>
      <div class="flex flex-nowrap items-center">
        <select v-model="filterForm.beds" class="input-filter-l w-28">
          <option :value="null">Beds</option>
          <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
          <option :value="6">6+</option>
        </select>
        <select v-model="filterForm.baths" class="input-filter-r w-28">
          <option :value="null">Baths</option>
          <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
          <option :value="6">6+</option>
        </select>
      </div>
      <div class="flex flex-nowrap items-center">
        <input
          v-model.number="filterForm.areaFrom"
          class="input-filter-l w-28"
          type="text"
          placeholder="Area from" />
        <input
          v-model.number="filterForm.areaTo"
          class="input-filter-r w-28"
          type="text"
          placeholder="Area to" />
      </div>
      <button type="submit" class="btn-normal">Filter</button>
      <button type="reset" @click="clear">Clear</button>
    </div>
  </form>
</template>

<script setup lang="ts">
  import type { ListingFilters } from '@/types';

  import { useForm } from '@inertiajs/vue3';
  import { route } from 'ziggy-js';

  const { filters } = defineProps<{ filters: ListingFilters }>();
  const filterForm = useForm({
    priceFrom: filters.priceFrom ?? null,
    priceTo: filters.priceTo ?? null,
    beds: filters.beds ?? null,
    baths: filters.baths ?? null,
    areaFrom: filters.areaFrom ?? null,
    areaTo: filters.areaTo ?? null,
  });

  const filter = () => {
    filterForm.get(route('listings.index'), {
      preserveState: true,
      preserveScroll: true,
    });
  };

  const clear = () => {
    filterForm.priceFrom = null;
    filterForm.priceTo = null;
    filterForm.beds = null;
    filterForm.baths = null;
    filterForm.areaFrom = null;
    filterForm.areaTo = null;

    filter();
  };
</script>
