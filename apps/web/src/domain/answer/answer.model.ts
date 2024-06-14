import { Question } from '../question'

import { VoiceResponse } from '../voiceResponse'

export class Answer {
  id: string

  content: string

  source: string

  questionId: string

  question?: Question

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  voiceResponses?: VoiceResponse[]
}
