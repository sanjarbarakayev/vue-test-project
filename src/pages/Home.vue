<template>
  <div>
    <!-- TOOLBAR -->
    <div>
      <nav>
        <ul>
          <li>
            <button
              v-for="nav of navItems"
              :key="nav.id"
              @click="$router.push(nav.route)"
            >
              {{ nav.title }}
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- MAIN CONTENT -->

    <pre>Counter: {{ counter }}</pre>
    <pre>Name: {{ name }}</pre>
    <pre>Double: {{ getDoubleCounter }}</pre>

    <button class="btn" @click="increment">Increment</button>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useCounterStore } from "@/stores/counterStore";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();

const { counter, name, getDoubleCounter } = storeToRefs(counterStore);

const { increment } = counterStore;

const navItems = [
  {
    id: 1,
    title: "Dashboard",
    route: {
      path: "/cabinet",
      name: "Dashboard",
    },
  },
  {
    id: 2,
    title: "Homiylar",
    route: {
      path: "/sponsors",
      name: "Sponsors",
      hash: "#contact",
    },
  },
  {
    id: 3,
    title: "Talabalar",
    route: {
      path: "/students",
      name: "Students",
    },
  },
];
</script>
