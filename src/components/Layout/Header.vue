<template>
  <header class="py-5">
    <h2>Header</h2>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
defineProps({
  user: {
    type: Object,
  },
});
</script>
