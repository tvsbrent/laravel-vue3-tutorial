<template>
  <div>Index</div>
  <div>The message is {{ message }}</div>
</template>

<script setup lang="ts">
  interface Props {
    message?: string;
  }

  defineProps<Props>();
</script>
