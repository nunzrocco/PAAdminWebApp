import { useAuthStore } from '../stores/AuthStore'
import * as authApi from '../services/auth.api'

export const useAuth = () => {
  const {
    accessToken,
    user,
    isAuthenticated,
    setAuth,
    logout: clearAuth,
  } = useAuthStore()

  const login = async (email: string, password: string) => {
    try {
      const { accessToken, user } = await authApi.login(email, password)
      setAuth(accessToken, user)
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      await authApi.logout()
    } finally {
      clearAuth()
    }
  }

  return {
    accessToken,
    user,
    isAuthenticated,
    login,
    logout,
  }
}