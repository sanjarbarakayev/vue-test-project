<template>
  <div>
    <h1>Sponsor Single</h1>
    <p>Sponsor ID: {{ $route.params.sponsorId }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log("id: ", route.params.id);
</script>
