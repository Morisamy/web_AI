export namespace VoiceResponseApplicationEvent {
  export namespace VoiceResponseCreated {
    export const key = 'voiceResponse.application.voiceResponse.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
