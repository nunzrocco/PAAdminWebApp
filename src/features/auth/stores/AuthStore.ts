import { create } from 'zustand';

export type UserRole = "SUPER_ADMIN" | "SALES" | "ADMIN";

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: UserRole[];
}
type AuthState = {
  accessToken: string | null
  user: User | null;
  isAuthenticated: boolean
  isInitializing: boolean
  setAuth: (token: string, user: User) => void
  setToken: (token: string) => void
  setInitializing: (isInitializing: boolean) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isAuthenticated: false,
  isInitializing: false,

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
  setInitializing: (isInitializing) =>
    set({
      isInitializing,
    }),
  logout: () =>
    set({
      accessToken: null,
      user: null,
      isAuthenticated: false,
    }),
}))