import { requireRoles } from '@/features/auth/guards/authGuard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/players')({
    beforeLoad: () => {
        requireRoles(["SUPER_ADMIN", "ADMIN"])
    },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_private/players"!</div>
}
