import LeaderboardsController from '#controllers/leaderboards_controller'
import UsersController from '#controllers/users_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import { Head } from '@inertiajs/react'

export default function Leaderboard(props: InferPageProps<LeaderboardsController, 'index'>) {
  return (
    <>
      <Head title="Homepage" />
      {props.users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </>
  )
}
