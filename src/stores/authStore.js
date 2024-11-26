import { ref } from "vue"
import { defineStore } from "pinia"
import { useRouter } from "vue-router"

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()

  const loading = ref(false)
  const isAuthenticated = ref(localStorage.getItem("access") ?? false)

  const login = async (data) => {
    loading.value = true
    const requestBody = JSON.stringify(data)
    try {
      const response = await fetch("https://metsenatclub.xn--h28h.uz/api/v1/auth/login/", {
        method: "POST",
        body: requestBody,
        headers: {
          'Content-Type': "application/json"
        }
      })

      const data = await response.json()

      if (!response.ok) {
        isAuthenticated.value = false
        alert("Invalid username or password")

        return Promise.reject(data)
      }

      isAuthenticated.value = true

      localStorage.setItem("access", data.access)
      localStorage.setItem("refresh", data.refresh)

      await router.push({ name: "Dashboard" })

      return data
    } catch (error) {
      isAuthenticated.value = false
      console.log('error: ', error);
    } finally {
      loading.value = false
    }
  }

  const user = ref()

  const fetchUser = () => {
    // 
  }

  return { loading, isAuthenticated, login }
})