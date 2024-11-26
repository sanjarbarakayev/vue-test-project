<template>
  <section class="my-20">
    <form class="flex flex-col gap-2" @submit.prevent="submitForm" autocomplete="off">
      <label for="login">Login</label>
      <input v-model="form.login" id="login" placeholder="Login" type="text" class="text-black" autocomplete="off"></input>

      <label for="password">Password</label>
      <input v-model="form.password" id="password" placeholder="Password" type="password" class="text-black" autocomplete="off"></input>

      <button class="btn" type="submit">Submit</button>
    </form>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  login: '',
  password: ''
})
</script>
