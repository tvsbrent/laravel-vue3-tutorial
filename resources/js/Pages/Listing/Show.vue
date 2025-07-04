<template>
  <div class="flex flex-col-reverse md:grid md:grid-cols-12 gap-4">
    <Box class="md:col-span-7 flex items-center w-full">
      <div class="w-full text-center font-medium text-gray-500">No images</div>
    </Box>
    <div class="md:col-span-5 flex flex-col">
      <Box>
        <template #header> Basic Info </template>
        <Price :price="listing.price" class="text-2xl font-bold" />
        <ListingInfo :listing="listing" class="text-lg" />
        <ListingAddress :listing="listing" class="text-gray-500" />
      </Box>
      <Box class="mt-4">
        <template #header> Monthly Payment </template>
        <div>
          <label class="label">Interest rate ({{ interestRate }}%)</label>
          <input
            v-model.number="interestRate"
            type="range"
            min="0.1"
            max="30"
            step="0.1"
            value="2.5"
            class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
          <label class="label">Duration ({{ duration }} years)</label>
          <input
            v-model.number="duration"
            type="range"
            min="3"
            max="35"
            step="1"
            value="25"
            class="w-full h-4 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
          <div class="text-gray-600 dark:text-gray-300 mt-2">
            <div class="text-gray-400">Your monthly payment</div>
            <Price :price="monthlyPayment" class="text-3xl" />
          </div>
          <div class="mt-2 text-gray-500">
            <div class="flex justify-between">
              <span>Total paid</span>
              <Price :price="totalPaid" class="font-medium" />
            </div>
            <div class="flex justify-between">
              <span>Principal paid</span>
              <Price :price="listing.price" class="font-medium" />
            </div>
            <div class="flex justify-between">
              <span>Interest paid</span>
              <Price :price="totalInterest" class="font-medium" />
            </div>
          </div>
        </div>
      </Box>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Listing } from '@/types';

  import { ref } from 'vue';

  import Box from '@/Components/UI/Box.vue';
  import ListingAddress from '@/Components/ListingAddress.vue';
  import ListingInfo from '@/Components/ListingInfo.vue';
  import Price from '@/Components/Price.vue';
  import { useMonthlyPayment } from '@/Composable/useMonthlyPayment';

  const props = defineProps<{ listing: Listing }>();
  const interestRate = ref(2.5);
  const duration = ref(25);
  const { monthlyPayment, totalPaid, totalInterest } = useMonthlyPayment(
    props.listing.price,
    interestRate,
    duration,
  );
</script>
