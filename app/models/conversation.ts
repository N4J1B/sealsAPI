import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, hasOne } from '@adonisjs/lucid/orm'
import Message from './message.js'
import type { HasMany, HasOne } from '@adonisjs/lucid/types/relations'

export default class Conversation extends BaseModel {
  @column({ isPrimary: true})
  declare id: String

  @column()
  declare sessionId: string

  @hasMany(() => Message)
  declare messages: HasMany<typeof Message>

  @hasOne(() => Message, {
    onQuery: query => {
      query.orderBy('createdAt', 'desc')
    },
  })
  declare lastMessage: HasOne<typeof Message>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}