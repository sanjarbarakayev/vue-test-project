<template>
  <Teleport to="body">
    <!-- BACKDROP -->
    <Transition name="fade">
      <div
        v-if="show"
        class="bg-white/60 fixed inset-0 z-10"
        @click.self="$emit('close-modal')"
      ></div>
    </Transition>
    <Transition name="fade-body">
      <!-- BODY -->
      <div
        v-if="show"
        class="fixed inset-0 flex items-center justify-center z-20"
      >
        <div class="w-[400px] bg-black rounded">
          <div class="flex items-center justify-between px-3 py-2">
            <h2>{{ title }}</h2>
            <button @click="$emit('close-modal')">x</button>
          </div>

          <!-- CONTENT -->

          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "Title",
  },
});
</script>
