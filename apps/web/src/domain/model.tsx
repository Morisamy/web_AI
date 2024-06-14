import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'
import {
  BillingPayment as BillingPaymentModel,
  BillingProduct as BillingProductModel,
  BillingSubscription as BillingSubscriptionModel,
} from './billing/billing.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Question as QuestionModel } from './question/question.model'

import { Answer as AnswerModel } from './answer/answer.model'

import { VoiceCommand as VoiceCommandModel } from './voiceCommand/voiceCommand.model'

import { VoiceResponse as VoiceResponseModel } from './voiceResponse/voiceResponse.model'

import { TrainingData as TrainingDataModel } from './trainingData/trainingData.model'

import { Admin as AdminModel } from './admin/admin.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}
  export class BillingProduct extends BillingProductModel {}
  export class BillingPayment extends BillingPaymentModel {}
  export class BillingSubscription extends BillingSubscriptionModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Question extends QuestionModel {}

  export class Answer extends AnswerModel {}

  export class VoiceCommand extends VoiceCommandModel {}

  export class VoiceResponse extends VoiceResponseModel {}

  export class TrainingData extends TrainingDataModel {}

  export class Admin extends AdminModel {}
}
