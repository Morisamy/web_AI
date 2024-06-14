import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { QuestionApplicationModule } from './question/application'

import { AnswerApplicationModule } from './answer/application'

import { VoiceCommandApplicationModule } from './voiceCommand/application'

import { VoiceResponseApplicationModule } from './voiceResponse/application'

import { TrainingDataApplicationModule } from './trainingData/application'

import { AdminApplicationModule } from './admin/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    QuestionApplicationModule,

    AnswerApplicationModule,

    VoiceCommandApplicationModule,

    VoiceResponseApplicationModule,

    TrainingDataApplicationModule,

    AdminApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
