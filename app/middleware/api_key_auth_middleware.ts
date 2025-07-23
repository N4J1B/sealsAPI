import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ApiKeyAuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const apiKey = ctx.request.header('x-api-key')
    if (!apiKey) {
      return ctx.response.unauthorized({ message: 'API Key is required' })
    }
    if (apiKey != env.get('API_KEY')) {
      return ctx.response.unauthorized({ message: 'Invalid API Key' })
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}