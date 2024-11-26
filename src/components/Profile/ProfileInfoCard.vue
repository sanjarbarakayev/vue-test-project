<template>
  <div class="border border-white rounded p-5">
    <p>Name</p>
    <p>{{ userName }}</p>
  </div>
</template>

<script setup>
import { inject } from "vue";

const userName = inject("userName");
</script>
