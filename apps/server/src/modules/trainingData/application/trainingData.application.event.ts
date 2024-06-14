export namespace TrainingDataApplicationEvent {
  export namespace TrainingDataCreated {
    export const key = 'trainingData.application.trainingData.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
