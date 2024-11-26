<template>
  <div>
    <h1>Computed</h1>
    <p>Counter: {{  counter  }}</p>
    <p>Double counter: {{ doubleCounter }}</p>
    <button class="bg-yellow-600 rounded px-2" @click="counter++">+</button>

    <section>
      <h2>Todos</h2>
      <pre>{{ getFirstThreeTodos("facilis,quis") }}</pre>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"

const counter = ref(1)

const doubleCounter = computed(() => {
  return counter.value * 2
})

const todos = ref([])

fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((res) => res.json())
  .then((todosResponse) => {
    todos.value = todosResponse
  })

const getFirstThreeTodos = computed(() => {
  return (searchText) => {
    const texts = searchText.split(',')

    return todos.value.filter((t) => {
      return texts.some((searchText) => t.title.includes(searchText))
    })
  }
})
</script>