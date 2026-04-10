import { useEffect, useState } from 'react'
import './App.css'
import { useInitAuth } from '@/features/auth/hooks/useInitAuth'
import { Loader } from '@/components/layout/Loader'
import { RouterProvider } from '@tanstack/react-router'
import router from './router'

function App() {
  const initAuth = useInitAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const handleInit = async () => {
      try {
        await initAuth()
      } catch (error) {
        // no-op, logout handled en useInitAuth o interceptors
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    void handleInit()

    return () => {
      mounted = false
    }
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App
