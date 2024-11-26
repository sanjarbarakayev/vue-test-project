<template>
  <LayoutHeader :user="user" />

  <main>
    <HomeUserInfo 
      :user-prop="user"
      @update-job="handleUpdate"
    />
  </main>
</template>

<script setup>
import LayoutHeader from "./Layout/Header.vue"
import HomeUserInfo from "./Home/UserInfo.vue"
import { ref, defineExpose } from "vue"

const user = ref({
  name: "Sanjar",
  age: 25,
  job: "Developer"
})

const handleUpdate = (newJob) => {
  console.log('Handle update!', newJob);
  user.value.job = newJob
}

defineExpose({
  handleUpdate
})
</script>
