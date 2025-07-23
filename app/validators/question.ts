import vine from '@vinejs/vine'

export const QuestionValidator = vine.compile(
  vine.object({
    conversationID: vine.string().uuid().optional().nullable(),
    question: vine.string().minLength(1).maxLength(255),
  })
)