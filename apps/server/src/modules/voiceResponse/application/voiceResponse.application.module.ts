import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { VoiceResponseDomainModule } from '../domain'
import { VoiceResponseController } from './voiceResponse.controller'

import { AnswerDomainModule } from '../../../modules/answer/domain'

import { VoiceResponseByAnswerController } from './voiceResponseByAnswer.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    VoiceResponseDomainModule,

    AnswerDomainModule,
  ],
  controllers: [VoiceResponseController, VoiceResponseByAnswerController],
  providers: [],
})
export class VoiceResponseApplicationModule {}
