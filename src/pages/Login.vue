<template>
  <main>
    <h1>Login Page</h1>

    <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
      <CInput type="text" v-model="form.username" />
      <CInput type="password" v-model="form.password" />
      <CButton class="btn" @click="$route.query">Submit</CButton>
    </form>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import CButton from "@/components/Base/CButton.vue";
import CInput from "@/components/Base/CInput.vue";
import { useAuthStore } from "@/stores/authStore";

const router = useRouter();
const route = useRoute();

const authStore = useAuthStore();
const { login } = authStore;

const form = reactive({
  username: undefined,
  password: undefined,
});

const onSubmit = () => {
  console.log(form);
  // username, password

  login(form);

  // send request to backend

  // login successfully

  // localStorage.setItem("token", "123");

  // router.push({ name: "Dashboard" });
};
</script>
