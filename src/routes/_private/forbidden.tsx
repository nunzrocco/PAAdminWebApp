import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/forbidden')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-10 flex flex-col items-start gap-4'>
      <h1 className='text-8xl text-stone-800'>Oops! :(</h1>
      <p className='text-2xl text-stone-700'>No tienes los permisos para acceder a esta página.</p>
    </div>
  )
}
