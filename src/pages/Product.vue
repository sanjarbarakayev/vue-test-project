<template>
  <section>
    <h1>Todo sinlge page</h1>

    <p>{{ todo.title }}</p>
  </section>
</template>

<script setup>
import { onBeforeMount, ref, computed } from "vue";
import { useRoute } from "vue-router";

const todo = ref({});
const route = useRoute();
const todoIdParam = route.params.todoId;

const fetchTodo = async () => {
  try {
    const r = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoIdParam}`
    );

    const data = await r.json();
    console.log(data);

    todo.value = data;
  } catch (e) {
    console.log(e);
  }
};

onBeforeMount(() => {
  console.log(todoIdParam);

  if (todoIdParam) {
    fetchTodo();
  }
});
</script>
