import { createFileRoute } from '@tanstack/react-router'
import { useAuthStore } from '@/features/auth/stores/AuthStore'
import { Loader } from '@/components/layout/Loader'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { isAuthenticated } = useAuthStore()
  
  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = '/dashboard'
    } else {
      window.location.href = '/login'
    }
  }, [isAuthenticated])
  
  return <Loader />
}