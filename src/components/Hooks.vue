<template>
  <div>
    <h1>Hooks</h1>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/')
}

const interval = ref()

onMounted(() => {
  fetchTodos()
  interval.value = setInterval(() => fetchTodos(), 1000)
})

onUpdated(() => {})

onUnmounted(() => {
  clearInterval(interval.value)
})
</script>
