import { useCallback } from 'react'
import { useAuthStore } from '../stores/AuthStore'
import { api } from '@/lib/pichangappApi'

export const useInitAuth = () => {
  const setAuth = useAuthStore((s) => s.setAuth)
  const logout = useAuthStore((s) => s.logout)

  return useCallback(async () => {
    console.log('Refreshing auth...')
    try {
      const res = await api.post('/auth/refresh')
      setAuth(res.data.accessToken, res.data.user)
    } catch {
      logout()
    }
  }, [setAuth, logout])
}