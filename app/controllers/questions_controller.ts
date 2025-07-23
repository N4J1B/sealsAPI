import Conversation from '#models/conversation'
import Message from '#models/message'
import env from '#start/env'
import { QuestionValidator } from '#validators/question'
import { errors, type HttpContext } from '@adonisjs/core/http'
import axios, { AxiosResponse } from 'axios'
import { randomUUID } from 'crypto'

export default class QuestionsController {

  async store({ request, response }: HttpContext) {

    const { conversationID, question } = await QuestionValidator.validate({
      conversationID: request.input('conversation_id'),
      question: request.input('question'),
    })
    let conversation: Conversation
    let res: AxiosResponse

    try {
      if (conversationID) {
        console.log('Existing conversation found:', conversationID)
        conversation = await Conversation.findOrFail(conversationID)
      } else {
        conversation = await Conversation.create({
          id: randomUUID(),
          sessionId: randomUUID(),
        })
      }

      await Message.create({
        id: randomUUID(),
        conversationId: conversation.id,
        message: question,
        senderType: 'user',
      })

      res = await axios.post(env.get("API_URL") + "/api/external/chatbot/send-message", {
        question: question,
        additional_context: request.input('additional_context'),
        session_id: conversation.sessionId,
      })
      if (res.status !== 200) {
        throw new errors.E_HTTP_EXCEPTION(`Error: ${res.statusText}`, { code: res.statusText, status: res.status })
      }
      if (!res.data || !res.data.data || !res.data.data.message || res.data.data.message.length === 0) {
        throw new errors.E_HTTP_EXCEPTION('No response from chatbot', { code: 'NO_RESPONSE', status: 500 })
      }

      await Message.create({
        id: randomUUID(),
        conversationId: conversation.id,
        message: res.data.data.message[0].text,
        senderType: 'bot',
      })
      
      return response.json(res.data.data.message[0])

    } catch (error) {
      console.error(error)
      return response.internalServerError({
        message: 'An error occurred while processing your request.',
        error: error instanceof Error ? error.message : 'Unknown error',
      })
    }
  }
}