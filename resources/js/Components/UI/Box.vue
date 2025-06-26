<template>
  <component
    :is="as"
    class="border border-gray-200 dark:border-gray-800 rounded-md p-4 shadow-sm dark:text-gray-300">
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
