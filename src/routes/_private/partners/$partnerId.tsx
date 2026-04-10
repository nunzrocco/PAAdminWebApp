import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/partners/$partnerId')({
  component: RouteComponent,
})

function RouteComponent() {
    const { partnerId } = Route.useParams()
  return <div>Hello "/_private/partners/{partnerId}"</div>
}
