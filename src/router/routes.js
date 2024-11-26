export default [
  {
    path: "/",
    name: "Home",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Home.vue"),
    redirect: "/cabinet",
    children: [
      {
        path: "cabinet",
        name: "Dashboard",
        component: () => import("@/pages/Home/PDashboard.vue"),
      },
      {
        path: "sponsors",
        name: "Sponsors",
        component: () => import("@/pages/Home/Sponsors/PIndex.vue"),
      },
      {
        path: "sponsors/:sponsorId",
        name: "SponsorsSingle",
        component: () => import("@/pages/Home/Sponsors/PSingle.vue"),
      },
      {
        path: "students",
        name: "Students",
        component: () => import("@/pages/Home/PStudents.vue"),
      },
    ]
  },
  {
    path: "/about",
    name: "About",
    meta: {
      layout: "default",
      requiresAuth: true,
    },
    component: () => import("@/pages/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
      isAuthPage: true
    },
    component: () => import("@/pages/Login.vue")
  },
  {
    path: "/todo/:todoId",
    name: "TodoSingle",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Product.vue")
  },
  {
    path: '/transition',
    name: "Transition",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Transition.vue")
  },
  {
    path: '/teleport',
    name: "Teleport",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Teleport.vue")
  },
  {
    path: '/bind',
    name: "Bind",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Bind.vue")
  },
  {
    path: '/profile',
    name: "Profile",
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/Profile.vue"),
    children: [
      {
        path: 'my-announcements',
        name: "MyAnnouncements",
        meta: {
          requiresAuth: true,
        },
        component: () => import("@/pages/profile/MyAnnouncements.vue"),
      },
      {
        path: 'personal-information',
        name: "PersonalInformation",
        meta: {
          requiresAuth: true,
        },
        component: () => import("@/pages/profile/PersonalInformation.vue"),
      },
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/pages/P404.vue")
  },
]