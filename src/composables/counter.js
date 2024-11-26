import { ref } from "vue";

export const useCounter = () => {
  const counter = ref(1);

  const increase = () => {
    counter.value++;
  };

  return {
    counter,
    increase
  }
}