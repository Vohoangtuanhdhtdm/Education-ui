import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/giavi')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/giavi"!</div>
}
