<template>
  <span>{{ formattedPrice }}</span>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  const props = defineProps<{
    price: number | string;
    currency?: string;
  }>();

  const formattedPrice = computed(() => {
    const priceValue = typeof props.price === 'number' ? props.price : parseFloat(props.price);
    return priceValue.toLocaleString(undefined, {
      style: 'currency',
      currency: props.currency || 'USD',
    });
  });
</script>