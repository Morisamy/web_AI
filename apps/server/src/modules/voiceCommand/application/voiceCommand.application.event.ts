export namespace VoiceCommandApplicationEvent {
  export namespace VoiceCommandCreated {
    export const key = 'voiceCommand.application.voiceCommand.created'

    export type Payload = {
      id: string
      userId: string
    }
  }
}
