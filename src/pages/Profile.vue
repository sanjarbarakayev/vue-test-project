<template>
  <section>
    <h1>Profile page</h1>

    <ul class="flex gap-2 w-[400px]">
      <li>
        <RouterLink :to="{ name: 'MyAnnouncements' }">
          My Announcements
        </RouterLink>
        <RouterLink :to="{ name: 'PersonalInformation' }">
          Personal Information
        </RouterLink>
      </li>
    </ul>

    <RouterView />
  </section>
</template>

<script setup>
import { provide, ref } from "vue";

const userName = ref("Sardor");

provide("userName", userName.value);
</script>
