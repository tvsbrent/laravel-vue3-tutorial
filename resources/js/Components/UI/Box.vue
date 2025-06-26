<template>
  <component
    :is="as"
    class="border border-gray-200 dark:border-gray-800 rounded-md p-4 shadow-sm dark:text-gray-300">
    <div v-if="$slots.header" class="text-gray-500 font-medium  mb-2">
      <slot name="header" />
    </div>
    <slot />
  </component>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      as?: string;
    }>(),
    {
      as: 'div',
    },
  );
</script>
