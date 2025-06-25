<template>Hello!!!! {{ count }}</template>

<script setup>
import { ref } from 'vue';
const count = ref(0);

setInterval(() => count.value++, 1000);
</script>