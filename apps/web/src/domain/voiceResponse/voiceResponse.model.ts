import { Answer } from '../answer'

export class VoiceResponse {
  id: string

  response: string

  answerId: string

  answer?: Answer

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
