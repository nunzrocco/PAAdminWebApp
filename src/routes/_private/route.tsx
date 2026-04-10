import { createFileRoute, Outlet } from '@tanstack/react-router'
import { PrivateLayout } from '@/components/layout/privateLayout/PrivateLayout'
import { requireAuth } from '@/features/auth/guards/authGuard'

export const Route = createFileRoute('/_private')({
  beforeLoad: () => {
    requireAuth()
  },
  component: PrivateLayoutComponent,
})

function PrivateLayoutComponent() {
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  )
}