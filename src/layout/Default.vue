<template>
  <LayoutHeader />

  <main class="auth-layout">
    <slot />
  </main>
</template>

<script setup>
import LayoutHeader from "@/components/Layout/Header.vue";
</script>
