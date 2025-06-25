<template>
  <Link href="/">Main Page</Link>&nbsp;
  <Link href="/hello">Hello</Link>
  <div>The page with time: {{ timer }}</div>
  <slot></slot>
</template>

<script setup>
  import { Link } from '@inertiajs/vue3';
  import { ref } from 'vue';

  const timer = ref(0);
</script>
