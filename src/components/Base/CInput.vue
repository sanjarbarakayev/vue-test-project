<template>
  <div class="relative">
    <input
      v-model="model"
      autocomplete="nope"
      :type
      :placeholder
      class="input w-full h-full py-3 px-4 outline-none focus:border-[#2E5BFF] transition-all duration-200"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text", // number, password, email, tel
  },
});

const model = defineModel();
</script>
