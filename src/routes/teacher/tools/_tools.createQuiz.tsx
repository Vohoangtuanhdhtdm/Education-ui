import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/teacher/tools/_tools/createQuiz')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/teacher/tools/_tools/createQuiz"!</div>
}
