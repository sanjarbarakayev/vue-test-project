import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(10)

  const getDoubleCounter = computed(() => counter.value * 2)

  const increment = () => counter.value++

  return {
    counter, getDoubleCounter, increment
  }
})