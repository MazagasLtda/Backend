import { UserService } from '#services/user_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(
    private userService: UserService,
    private ctx: HttpContext
  ) {}

  async me({ auth }: HttpContext) {
    const user = auth.getUserOrFail()
    return user
  }

  async create({}: HttpContext) {}
}
