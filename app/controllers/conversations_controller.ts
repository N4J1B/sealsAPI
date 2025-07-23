import Conversation from '#models/conversation'
import type { HttpContext } from '@adonisjs/core/http'

export default class ConversationsController {
  async index({ request, response }: HttpContext) {
    const page = request.input('page', 1)
    const limit = request.input('limit', 10)
    const conversations = await Conversation.query()
      .preload('lastMessage')
      .orderBy('createdAt', 'desc')
      .paginate(page, limit)
    return response.json(conversations)
  }

  async show({ params, response }: HttpContext) {
    const conversation = await Conversation.query()
      .where('id', params.id)
      .preload('messages')
      .firstOrFail()
      
    return response.json(conversation)
  }

  async delete({ params, response }: HttpContext) {
    const conversation = await Conversation.findOrFail(params.id)
    await conversation.delete()
    return response.json({ message: 'Conversation deleted successfully' })
  }

}