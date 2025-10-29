/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
router.on('/').renderInertia('home')

// Healthcheck
const HealthChecksController = () => import('#controllers/health_checks_controller')

router.get('/health', [HealthChecksController])

// Swagger
import AutoSwagger from 'adonis-autoswagger'
import swagger from '#config/swagger'

router.get('/swagger', async () => {
  return AutoSwagger.default.docs(router.toJSON(), swagger)
})

router.get('/docs', async () => {
  return AutoSwagger.default.ui('/swagger', swagger)
})

// Leaderboards
const LeaderboardsController = () => import('#controllers/leaderboards_controller')
router.get('/leaderboard', [LeaderboardsController, 'index'])

// Users
const UsersController = () => import('#controllers/users_controller')

router.get('/users/me', [UsersController, 'me']).use(
  middleware.auth({
    guards: ['basicAuth'],
  })
)

router.post('/users', [UsersController, 'create'])
