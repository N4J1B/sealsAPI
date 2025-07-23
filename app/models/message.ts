import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Conversation from './conversation.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Message extends BaseModel {
  @column({ isPrimary: true})
  declare id: String

  @column()
  declare conversationId: String

  @column()
  declare senderType: 'user' | 'bot'

  @column()
  declare message: string

  @belongsTo(() => Conversation)
  declare conversation: BelongsTo<typeof Conversation>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}