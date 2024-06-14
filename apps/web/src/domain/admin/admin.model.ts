import { TrainingData } from '../trainingData'

export class Admin {
  id: string

  email: string

  password: string

  dateCreated: string

  dateDeleted: string

  dateUpdated: string

  trainingDatas?: TrainingData[]
}
