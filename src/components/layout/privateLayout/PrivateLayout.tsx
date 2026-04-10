import { useNavigate } from '@tanstack/react-router'
import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import { useAuthStore } from '@/features/auth/stores/AuthStore'
import { useEffect } from 'react'

export const PrivateLayout = ({ children }: { children?: React.ReactNode }) => {
  const isAuth = useAuthStore((s) => s.isAuthenticated)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!isAuth) {
      navigate({ to: '/login' })
    }
  }, [isAuth, navigate])

  if (!isAuth) return null

  return (
    <>
      <Header />
      <main className='bg-gray-100 h-screen flex'>
        <Sidebar />
        <div className='h-full w-full m-5'>
          {children}
        </div>
      </main>
    </>
  )
}