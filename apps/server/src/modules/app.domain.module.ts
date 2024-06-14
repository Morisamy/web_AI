import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { QuestionDomainModule } from './question/domain'

import { AnswerDomainModule } from './answer/domain'

import { VoiceCommandDomainModule } from './voiceCommand/domain'

import { VoiceResponseDomainModule } from './voiceResponse/domain'

import { TrainingDataDomainModule } from './trainingData/domain'

import { AdminDomainModule } from './admin/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    QuestionDomainModule,

    AnswerDomainModule,

    VoiceCommandDomainModule,

    VoiceResponseDomainModule,

    TrainingDataDomainModule,

    AdminDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
