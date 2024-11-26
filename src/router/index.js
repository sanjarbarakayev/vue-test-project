import { createRouter, createWebHistory } from "vue-router"
import routes from "./routes"
import { useAuthStore } from "@/stores/authStore"

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthorized = authStore.isAuthenticated

  if (!isAuthorized && to.meta.requiresAuth) {
    return next({ name: "Login" })
  } else if (isAuthorized && to.meta.isAuthPage) {
    return next({ name: "Dashboard" })
  } else {
    return next()
  }
})

export default router