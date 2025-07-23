/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import ConversationsController from '#controllers/conversations_controller'
import QuestionsController from '#controllers/questions_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

router.post('/question', [QuestionsController, 'store'])

router.group(() => {
  router.get('/conversation', [ConversationsController, 'index'])
  router.get('/conversation/:id', [ConversationsController, 'show'])
  router.delete('/conversation/:id', [ConversationsController, 'delete'])
}).use(middleware.apiKeyAuth())

router.any('/', (ctx) => {
  return ctx.response.notFound('Read the documentation')
})