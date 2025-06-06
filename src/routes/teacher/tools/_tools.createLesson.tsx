import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teacher/tools/_tools/createLesson')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/teacher/tools/_tools/createLesson"!</div>
}
