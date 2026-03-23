import { useAuthStore } from '@/features/auth/stores/AuthStore'
import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:3019/api",
  withCredentials: true, // 👈 necesario para cookies (refresh)
})

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

let isRefreshing = false
let queue: any[] = []

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve) => {
          queue.push((token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`
            resolve(api(originalRequest))
          })
        })
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const res = await axios.post(
          '/auth/refresh',
          {},
          { withCredentials: true }
        )

        const newToken = res.data.accessToken

        useAuthStore.getState().setToken(newToken)

        queue.forEach((cb) => cb(newToken))
        queue = []

        return api(originalRequest)
      } catch (err) {
        useAuthStore.getState().logout()
        window.location.href = '/login'
        return Promise.reject(err)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(error)
  }
)

export {
    api
}