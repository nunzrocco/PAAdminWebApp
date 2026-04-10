// features/auth/router/guards.ts
import { redirect } from "@tanstack/react-router"
import { useAuthStore } from "../stores/AuthStore"


export function requireAuth() {
  const { isAuthenticated } = useAuthStore.getState()

  if (!isAuthenticated) {
    throw redirect({
      to: "/login",
    })
  }
}

export function requireRoles(roles: string[]) {
  const { user } = useAuthStore.getState()

  if (!user) {
    throw redirect({ to: "/login" })
  }

  const hasRole = roles.some((r) => user.roles.includes(r as any))

  if (!hasRole) {
    throw redirect({
      to: "/forbidden",
    })
  }
}