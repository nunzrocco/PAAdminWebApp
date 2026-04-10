import { FranchiseGroupPage } from '@/features/partners/pages/FranchiseGroup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/franchise-groups/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <>
    <FranchiseGroupPage />
  </>
}
