<template>
  <table
    class="w-full text-sm mx-auto border-separate border-spacing-y-3 pt-12"
  >
    <thead class="text-grey-400 font-normal text-xs uppercase">
      <tr>
        <th scope="col" class="text-center px-4 py-3">#</th>
        <th
          scope="col"
          class="text-center px-4 py-3"
          v-for="headItem of head"
          :key="headItem.key"
        >
          {{ headItem.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(d, index) of data"
        :key="index"
        class="py-5 px-4 text-center font-medium text-sm"
        @click="$emit('on-row-click', d)"
      >
        <td class="border border-black">{{ index + 1 }}</td>
        <td
          v-for="headItem of head"
          :key="headItem.key"
          class="border border-black"
        >
          <slot :name="headItem.key" :colData="d[headItem.key]" :data="d">
            {{ d[headItem.key] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
defineProps({
  head: {
    type: Array,
    requred: true,
  },
  data: {
    type: Array,
    required: true,
  },
});
</script>
