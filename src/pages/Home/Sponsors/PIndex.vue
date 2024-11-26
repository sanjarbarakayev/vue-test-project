<template>
  <div>
    <h1 class="mb-20">Sponsors Page</h1>

    <pre>Counter: {{ counter }}</pre>

    <nav>
      <ul>
        <li>
          <a href="#info">Info</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>

    <pre>Login: {{ login }}</pre>

    <section>
      <h2>Forms</h2>

      <form class="flex flex-col gap-4" autocomplete="off">
        <CInput v-model="login" placeholder="Loginni kiriting" />

        <CInput type="password" placeholder="Parolni kiriting" />

        <CSelect :options="sponsorStatuses" />

        <CSelect
          :options="studentDegrees"
          label-key="label"
          value-key="value"
        />
      </form>
    </section>

    <CTable
      :head="tableHead"
      :data="sponsors"
      @on-row-click="
        $router.push({
          name: 'SponsorsSingle',
          params: { sponsorId: $event.id },
        })
      "
    >
      <template #sponsorshipAmount="{ colData }">
        <p>
          <span>{{ colData }}</span>
          <span>UZS</span>
        </p>
      </template>
      <template #status="{ colData }">
        <span :class="getStatusStyles(colData)">
          {{ colData }}
        </span>
      </template>
      <template #action="{ data }">
        <RouterLink
          :to="{ name: 'SponsorsSingle', params: { sponsorId: data.id } }"
        >
          Profile Link
        </RouterLink>
      </template>
    </CTable>
  </div>
</template>

<script setup>
import CInput from "@/components/Base/CInput.vue";
import CSelect from "@/components/Base/CSelect.vue";
import CTable from "@/components/Base/CTable.vue";
import { computed, onMounted, ref } from "vue";
import { useCounterStore } from "@/stores/counterStore";
import { storeToRefs } from "pinia";

const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);

const login = ref();

const tableHead = [
  {
    key: "fullName",
    title: "F.I.SH.",
  },
  {
    key: "phone",
    title: "Telefon raqam",
  },
  {
    key: "sponsorshipAmount",
    title: "Homiylik summasi",
  },
  {
    key: "spentAmount",
    title: "Sarflangan summa",
  },
  {
    key: "date",
    title: "Sana",
  },
  {
    key: "status",
    title: "Holati",
  },
  {
    key: "action",
    title: "Amallar",
  },
];

const sponsors = [
  {
    id: 1,
    fullName: "Alimov Abror Xabibullayevich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "30 000 000 ",
    spentAmount: "0 ",
    currency: "UZS",
    date: "15.01.2021",
    status: "Yangi",
  },
  {
    id: 2,
    slug: "saimov-rustam",
    fullName: "Saimov Rustam Saimjonovich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "1 000 000 ",
    spentAmount: "0 ",
    currency: "UZS",
    date: "02.02.2021",
    status: "Moderatsiyada",
  },
  {
    id: 3,
    fullName: "Sanginov Otabek Muratovich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "5 000 000 ",
    spentAmount: "5 000 000 ",
    currency: "UZS",
    date: "20.04.2021",
    status: "Tasdiqlangan",
  },
  {
    id: 4,
    fullName: "Nazarov Sanjar Olimovich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "7 000 000",
    spentAmount: "7 000 000 ",
    currency: "UZS",
    date: "03.05.2021",
    status: "Bekor qilingan",
  },
  {
    id: 5,
    fullName: "Ibragimov Sohib Mirfayozovich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "10 000 000",
    spentAmount: "0 ",
    currency: "UZS",
    date: "10.05.2021",
    status: "Moderatsiyada",
  },
  {
    id: 6,
    fullName: "Ishmuhammedov Aziz Ishqobilovich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "30 000 000 ",
    spentAmount: "1 000 000 ",
    currency: "UZS",
    date: "17.06.2021",
    status: "Bekor qilingan",
  },
  {
    id: 7,
    fullName: "Qosimov Furqat Xabibullayevich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "50 000 000",
    spentAmount: "0 ",
    currency: "UZS",
    date: "21.06.2021",
    status: "Yangi",
  },
  {
    id: 8,
    fullName: "Ortiqov Abror Bahodirovich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "70 000 000",
    spentAmount: "0",
    currency: "UZS",
    date: "25.02.2021",
    status: "Yangi",
  },
  {
    id: 9,
    fullName: "Rustamov Oybek  Tajiddinovich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "50 000 000",
    spentAmount: "2 000 000",
    currency: "UZS",
    date: "18.07.2021",
    status: "Tasdiqlangan",
  },
  {
    id: 10,
    fullName: "Isfandiyorov  Iqbol Bobomirzayevich",
    phone: "+99899 973-72-60",
    sponsorshipAmount: "1 000 000 ",
    spentAmount: "0 ",
    currency: "UZS",
    date: "28.02.2021",
    status: "Moderatsiyada",
  },
];

const getStatusStyles = computed(() => (statusText) => {
  // Yangi, Moderatsiyada, Tasdiqlangan, Bekor qilingan

  const styles = {
    Yangi: "text-[#5BABF2]",
    Moderatsiyada: "text-[#FFA445]",
    Tasdiqlangan: "text-[#00CF83]",
    "Bekor qilingan": "text-[#979797]",
  };

  return styles[statusText];
});

const sponsorStatuses = [
  {
    id: 0,
    name: "Barcha statuslar",
  },
  {
    id: 1,
    name: "Yangi",
  },
  {
    id: 2,
    name: "Moderatsiyada",
  },
  {
    id: 3,
    name: "Tasdiqlangan",
  },
  {
    id: 4,
    name: "Bekor qilingan",
  },
];

const studentDegrees = ref([]);

onMounted(() => {
  setTimeout(() => {
    studentDegrees.value = [
      {
        value: "all",
        label: "Barcha darajalar",
      },
      {
        value: "bachalor",
        label: "Bakalavr",
      },
      {
        value: "master",
        label: "Magistr",
      },
      {
        value: "phd",
        label: "PHD",
      },
    ];
  }, 1000);
});
</script>
