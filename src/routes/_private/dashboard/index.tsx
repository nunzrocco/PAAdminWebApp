import { Dashboard } from '@/features/dashboard/Dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard />
}
