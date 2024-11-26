<template>
  <main>
    <Components ref="child" />

    <button @click="updateJob">Update job from Parent</button>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Components from "./components/Components.vue"

const child = ref(null)

onMounted(() => {
  console.log(child.value)
})

const updateJob = () => {
  child.value.handleUpdate("PM")
}
</script>

