<template>
  <div class="relative">
    <div
      class="input flex justify-between py-2.5 pl-3 pr-2.5 cursor-pointer select-none"
      @click="isOpen = !isOpen"
    >
      <span>{{ selectedOptionText }}</span>
      <i>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8521 7.60181C16.2101 7.24383 16.7905 7.24383 17.1485 7.60181C17.5065 7.95979 17.5065 8.54019 17.1485 8.89817L11.6485 14.3982C11.3015 14.7452 10.7427 14.7573 10.3809 14.4257L4.88091 9.38405C4.50772 9.04195 4.48251 8.4621 4.8246 8.08891C5.16669 7.71572 5.74655 7.6905 6.11974 8.0326L10.9728 12.4812L15.8521 7.60181Z"
            fill="#B5B5C3"
          />
        </svg>
      </i>
    </div>

    <Transition name="dropdown">
      <ul
        v-if="isOpen"
        class="absolute top-[calc(100%+4px)] border border-[#E0E7FF] rounded-md bg-white w-full z-10"
      >
        <li
          v-for="(option, index) of options"
          :key="index"
          class="px-4 py-3 border-b border-border-[#E0E7FF] last:border-none cursor-pointer select-none"
          @click="onSelect(option)"
        >
          {{ option[labelKey] }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const isOpen = ref(false);

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: "name",
  },
  valueKey: {
    type: String,
    default: "id",
  },
});

const selectedOption = ref();

watch(
  () => props.options,
  (newValue) => {
    if (newValue.length > 0) {
      console.log(newValue);

      selectedOption.value = newValue[0];
    }
  },
  {
    immediate: true,
  }
);

const selectedOptionText = computed(() => {
  return selectedOption.value?.[props.labelKey];
});

const onSelect = (option) => {
  isOpen.value = false;
  selectedOption.value = option;
};
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease-in-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
