import { PublicLayout } from '@/components/layout/publicLayout/PublicLayout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <PublicLayout>  
      <Outlet />
    </PublicLayout>
  )
}
