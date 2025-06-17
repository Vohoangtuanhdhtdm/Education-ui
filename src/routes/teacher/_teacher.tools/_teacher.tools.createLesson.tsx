import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/teacher/_teacher/tools/_teacher/tools/createLesson',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/teacher/_teacher/tools/_teacher/tools/createLesson"!</div>
}
