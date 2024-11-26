<template>
  <h1 class="mb-5">Transitions</h1>

  <section class="grid grid-cols-4 gap-5 mb-5">
    <TransitionGroup name="fade">
      <a
        v-for="(todo, index) of todoCards"
        :key="todo.id"
        :href="`https://${todo.link}`"
        target="_blank"
        class="rounded border border-white px-4 py-3 cursor-pointer select-none"
        @click="toggleStatus(index)"
      >
        {{ todo.title }}
      </a>
    </TransitionGroup>

    <!-- :style="{ borderColor: todoBorderColor }" -->
    <!-- :class="[extraClasses, extraExtraClasses]" -->
    <!-- :class="{ 'line-through': todo.completed }" -->
  </section>

  <button @click="addTodo" class="rounded border border-white p-1 mr-1">
    Add Todo
  </button>
  <button @click="removeTodo" class="rounded border border-white p-1">
    Remove Todo
  </button>

  <TransitionComponent :key="trigger" />
  <button class="btn" type="button" @click="onClear">Clear</button>
  <pre>{{ trigger }}</pre>
</template>

<script setup>
import { ref, reactive } from "vue";
import TransitionComponent from "@/components/Transition.vue";

const todoCards = ref([
  {
    id: 1,
    title: "Todo 1",
    completed: false,
    link: "google.com",
  },
  {
    id: 2,
    title: "Todo 2",
    completed: false,
    link: "youtube.com",
  },
  {
    id: 3,
    title: "Todo 3",
    completed: false,
    link: "yandex.com",
  },
]);

const extraClasses = "border-red-600";
const extraExtraClasses = "rounded-full";
const todoBorderColor = "blue";
const link = "https://google.com";

const addTodo = () => {
  const newId = todoCards.value.length + 1;

  const newTodo = {
    id: newId,
    title: `Todo ${newId}`,
    completed: false,
  };

  todoCards.value.push(newTodo);
};

const removeTodo = () => {
  todoCards.value.pop();
};

const toggleStatus = (index) => {
  todoCards.value[index].completed = !todoCards.value[index].completed;
};

const form = reactive({
  login: "",
  password: "",
});

const submitForm = () => {
  console.log("Hello", form);
};

const trigger = ref(0);

const onClear = () => {
  trigger.value++;
};
</script>
