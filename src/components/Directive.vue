<template>
  <section>
    <h1>Directive</h1>
    <div v-html="cleanHtmlContent"></div>

    <div @click="onClickContainer">
      <p>Text</p>
      <button @click.stop="onClickBtn">Button</button>
    </div>

    <form class="flex flex-col gap-4" @submit.prevent="onSubmitForm">
      <label>Name</label>
      <input type="text" class="text-black">

      <button type="submit">Submit</button>
    </form>
  </section>

  <section>
    <h2>Todos</h2>

    <ul class="flex flex-col gap-5">
      <li v-for="(todo, index) in todos.slice(0, 10)" :key="'A' + todo.id" class="flex flex-col gap-1">
        <span>Title {{ todo.title }}</span>
        <span>Status: {{ todo.completed }}</span>
        <span>Index {{ index }}</span>
        <button @click="onComplete(index)">Complete</button>
      </li>
    </ul>
  </section>

  <section class="mb-5">
    <h2 class="font-bold">Coffee Info</h2>

    <ul class="flex flex-col gap-2">
      <li v-for="(info, key) in coffee">
        {{ key }}
        {{ info }}
      </li>
    </ul>
  </section>

  <section class="mb-[100vh]">
    <h2 class="font-bold">Profile</h2>
    
    <div class="flex gap-4">
      <button @click="showAnnouncement = 'true'">Annoucements</button>
      <button @click="showAnnouncement = 'false'">Profile</button>
      <button @click="showAnnouncement = 'null'">Hide All</button>
    </div>

    <div v-if="showAnnouncement === 'true'">
      <form class="flex flex-col gap-4" @submit.prevent="onSubmitForm">
      <label>Name</label>
      <input type="text" class="text-black">

      <button type="submit">Submit</button>
    </form>
    </div>
    <div v-if="showAnnouncement === 'false'">Profile Content</div>
    <div v-if="showAnnouncement === 'null'">Empty Content</div>
  </section>
</template>

<script setup>
import { ref } from "vue"
import Dompurify from "dompurify"

const staticText = 'Lorem ipsum'
const cleanHtmlContent = Dompurify.sanitize(`<b onclick="alert('hello')">Bold</b><u>Underlined</u>`)

const onSubmitForm = (e) => {
  console.log('On submit')
}

const onClickContainer = () => {
  console.log('container');
}

const onClickBtn = (e) => {
  console.log('btn');
}

const todos = ref([])

fetch('https://jsonplaceholder.typicode.com/todos?limit=10')
  .then((res) => res.json())
  .then((todosResponse) => {
    todos.value = todosResponse
  })

const onComplete = (index) => {
  todos.value[index].completed = !todos.value[index].completed
}

const coffee = {
  name: "Americano",
  size: "MD",
  price: "21 000 UZS"
}

const showAnnouncement = ref('true')
</script>