import { useAuthStore } from "@/features/auth/stores/AuthStore"
import type { PropsWithChildren } from "react"
import { Navigate, Outlet } from "react-router-dom"

interface PublicLayoutProps extends PropsWithChildren
{

}

export const PublicLayout = () => {
  const isAuth = useAuthStore((s) => s.isAuthenticated)

  if (isAuth) {
    return <Navigate to="/dashboard" />
  }

  return <><Outlet></Outlet></>
}