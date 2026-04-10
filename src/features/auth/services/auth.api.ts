import { api } from '@/lib/pichangappApi'

type loginResponse = {
    accessToken: string,
    user: any
}
export const login = async (email: string, password: string): Promise<loginResponse> => {
  const res = await api.post<loginResponse>('/auth/login', { email, password })

  return res.data
}

export const logout = async () => {
    await api.post("/auth/logout");
}