<template>
  <main class="main-wrapper">
    <Component :is="activeLayout">
      <RouterView />
    </Component>

    <section id="modals"></section>

    <!-- <Button text="Open modal" @click="showModal = true" /> -->

    <CModal title="Filter" :show="showModal" @close-modal="showModal = false">
      <form action="">
        <input type="text" />
        <select name="" id="">
          <option value="">Hello</option>
          <option value="">Hello</option>
          <option value="">Hello</option>
        </select>
      </form>

      <button>Button</button>
    </CModal>
  </main>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
import { computed, ref } from "vue";
import CModal from "./components/Base/CModal.vue";
import CTable from "./components/Base/CTable.vue";

import Default from "@/Layout/Default.vue";
import Auth from "@/Layout/Auth.vue";

import Button from "@/components/Base/CButton.vue";

const layouts = {
  default: Default,
  auth: Auth,
};

const route = useRoute();

const routeLayout = computed(() => {
  return route.meta.layout ?? "default";
});

const activeLayout = computed(() => {
  return layouts[routeLayout.value];
});

const showModal = ref(false);
</script>
