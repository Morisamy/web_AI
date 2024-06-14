import { User } from '../user'

import { Answer } from '../answer'

export class Question {
  id: string

  content: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  answers?: Answer[]
}
