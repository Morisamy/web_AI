import { Notification } from '../notification'

import { Question } from '../question'

import { VoiceCommand } from '../voiceCommand'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email?: string
  status: UserStatus
  name?: string
  pictureUrl?: string
  password?: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  questions?: Question[]

  voiceCommands?: VoiceCommand[]
}
