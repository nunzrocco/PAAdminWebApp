import { useAuthStore } from "@/features/auth/stores/AuthStore"
import { useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"

export const PublicLayout = ({ children }: { children?: React.ReactNode }) => {
  const isAuth = useAuthStore((s) => s.isAuthenticated)
  const navigate = useNavigate()
  
  useEffect(() => {
      if (isAuth) {
        navigate({ to: '/dashboard' })
      }
    }, [isAuth, navigate])

  return (
    <div className='w-screen h-screen bg-stone-800'>
      {children}
    </div>
  )
}