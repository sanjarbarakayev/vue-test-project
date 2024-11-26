<template>
  <div>
    <h1>Vue Components</h1>

    <section class="mb-[100vh]">
      <h2 class="font-bold">Profile</h2>

      <div class="flex gap-4">
        <button @click="showAnnouncement = 'true'">Annoucements</button>
        <button @click="showAnnouncement = 'false'">Profile</button>
        <button @click="showAnnouncement = 'null'">Hide All</button>
      </div>

      <Transition name="fade" mode="out-in">
        <div :key="showAnnouncement">
          <div v-if="showAnnouncement === 'true'">
            <form class="flex flex-col gap-4" @submit.prevent="onSubmitForm">
              <label>Name</label>
              <input type="text" class="text-black" />

              <button type="submit">Submit</button>
            </form>
          </div>
          <div v-else-if="showAnnouncement === 'false'">Profile Content</div>
          <div v-else-if="showAnnouncement === 'null'">Empty Content</div>
        </div>
      </Transition>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showAnnouncement = ref("undefined");
</script>
