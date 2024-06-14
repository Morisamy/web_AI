import { User } from '../user'

export class VoiceCommand {
  id: string

  command: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
