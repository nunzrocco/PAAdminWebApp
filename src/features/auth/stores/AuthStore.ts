import { create } from 'zustand';

type UserRole = "SUPER_ADMIN" | "SALES" | "ADMIN";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
}
type AuthState = {
  accessToken: string | null
  user: User | null;
  isAuthenticated: boolean
  setAuth: (token: string, user: User) => void
  setToken: (token: string) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isAuthenticated: false,

  setAuth: (token, user) =>
    set({
      accessToken: token,
      user,
      isAuthenticated: true,
    }),
  setToken: (token) => 
    set({
      accessToken: token
    }),
  logout: () =>
    set({
      accessToken: null,
      user: null,
      isAuthenticated: false,
    }),
}))