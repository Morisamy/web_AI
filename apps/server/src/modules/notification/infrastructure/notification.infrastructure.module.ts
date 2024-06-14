import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationQuestionSubscriber } from './subscribers/notification.question.subscriber'

import { NotificationAnswerSubscriber } from './subscribers/notification.answer.subscriber'

import { NotificationVoiceCommandSubscriber } from './subscribers/notification.voiceCommand.subscriber'

import { NotificationVoiceResponseSubscriber } from './subscribers/notification.voiceResponse.subscriber'

import { NotificationTrainingDataSubscriber } from './subscribers/notification.trainingData.subscriber'

import { NotificationAdminSubscriber } from './subscribers/notification.admin.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationQuestionSubscriber,

    NotificationAnswerSubscriber,

    NotificationVoiceCommandSubscriber,

    NotificationVoiceResponseSubscriber,

    NotificationTrainingDataSubscriber,

    NotificationAdminSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
