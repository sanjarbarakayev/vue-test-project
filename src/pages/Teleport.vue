<template>
  <div>
    <button class="btn" @click="showModal = true">Open modal</button>

    <Teleport to="#modals">
      <div
        v-show="showModal"
        class="bg-white fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-5 w-[200px] text-black text-center"
      >
        Modal content
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
</script>
