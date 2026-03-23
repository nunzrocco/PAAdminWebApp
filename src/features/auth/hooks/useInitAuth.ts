import { useAuthStore } from '../stores/AuthStore'
import { api } from '@/lib/pichangappApi'

export const useInitAuth = () => {
  const setAuth = useAuthStore((s) => s.setAuth)
  const logout = useAuthStore((s) => s.logout)

  return async () => {
    try {
      const res = await api.post('/auth/refresh')
      setAuth(res.data.accessToken, res.data.user)
    } catch {
      logout()
    }
  }
}