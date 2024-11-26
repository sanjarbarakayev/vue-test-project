import { ref } from "vue"

export const useFetch = () => {
  const data = ref()
  const error = ref()
  const loading = ref()

  const fetchData = async (url) => {
    try {
      loading.value = true
      const r = await fetch(url)

      if (!r.ok) {
        throw Error("Fetch failed")
      }

      data.value = await r.json()
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, fetchData }
}