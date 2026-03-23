import { useEffect, useState } from 'react'
import './App.css'
import { AppRouter } from './routers/AppRouter'
import { RouterProvider } from 'react-router-dom'
import { useInitAuth } from '@/features/auth/hooks/useInitAuth'
import { Loader } from '@/components/layout/Loader'

function App() {
  const initAuth = useInitAuth()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    initAuth().finally(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    })
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App
