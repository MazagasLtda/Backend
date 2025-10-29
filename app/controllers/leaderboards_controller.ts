import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class LeaderboardsController {
  constructor(private userService: UserService) {}

  async index({ inertia }: HttpContext) {
    return inertia.render('leaderboard', { users: [{ email: 'test@gmail.com' }] })
  }
}
