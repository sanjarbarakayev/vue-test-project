<template>
  <div>
    <h1>Dashboard Page</h1>

    <ul class="w-[400px]">
      <li v-for="i of data" :key="i.id" class="flex justify-start">
        <b>{{ i.title }}:</b>
        <span>{{ formatMoneyDecimal(i.amount) }}</span>
        <span> UZS</span>
      </li>
    </ul>

    <section>
      <h2 class="mb-1">Counter: {{ counter }}</h2>
      <button @click="increase">Increase</button>
    </section>

    <section>
      <h2>Data fetching</h2>

      <p v-if="loading">Loading...</p>
      <p v-else-if="error">Fetch failed</p>
      <p v-else>{{ todo }}</p>
    </section>
  </div>
</template>

<script setup>
import { formatMoneyDecimal } from "@/utils/formatters";
import { useCounter } from "@/composables/counter";
import { useFetch } from "@/composables/fetch";
import { onMounted, watch } from "vue";

const { counter, increase } = useCounter();

const { data: todo, error, loading, fetchData } = useFetch();

const data = [
  {
    id: 1,
    title: "Jami to‘langan summa",
    amount: 1684325000,
  },
  {
    id: 2,
    title: "Jami so‘ralgan summa",
    amount: 14098530000,
  },
  {
    id: 3,
    title: "To‘lanishi kerak summa",
    amount: 12414205000,
  },
];

onMounted(async () => {
  await fetchData("https://jsonplaceholder.typicode.com/todos/1000");
});
</script>
