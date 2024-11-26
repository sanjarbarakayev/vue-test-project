<template>
  <div class="text-gold-600">
    <p>Name: {{  userProp.name  }}</p>
    <p>Age: {{  age  }}</p>
    <p>Job: {{ userProp.job }}</p>

    <button @click="onClick">Update job</button>
  </div>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps({
  userProp: {
    type: Object,
    default: () => ({
      name: "Default name",
      age: "Default age",
      job: "Deafult job"
    })
  },
  age: {
    type: Number,
    default: 20
  }
})

const emit = defineEmits(['update-job'])

const newJob = ref("Designer")

const onClick = () => {
  console.log(props)
  emit('update-job', newJob.value)
}
</script>
