<template>
  <button
    class="px-8 py-2 bg-[#36F] text-white rounded-[5px] flex gap-2.5 items-center justify-center"
    :class="[{ 'flex-row-reverse': iconPosition === 'left' }, btnClass]"
  >
    <span>{{ text }}</span>
    <slot :message="'Message from child'" />
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  text: {
    type: String,
    default: "Button",
  },
  iconPosition: {
    type: String,
    default: "left",
  },
  btnClass: {
    type: String,
    default: "",
  },
});
</script>
