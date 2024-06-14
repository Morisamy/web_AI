import { AiApi } from './ai/ai.api'
import { AuthenticationApi } from './authentication/authentication.api'
import { AuthorizationApi } from './authorization/authorization.api'
import { BillingApi } from './billing/billing.api'
import { UploadApi } from './upload/upload.api'

import { UserApi } from './user/user.api'

import { NotificationApi } from './notification/notification.api'

import { QuestionApi } from './question/question.api'

import { AnswerApi } from './answer/answer.api'

import { VoiceCommandApi } from './voiceCommand/voiceCommand.api'

import { VoiceResponseApi } from './voiceResponse/voiceResponse.api'

import { TrainingDataApi } from './trainingData/trainingData.api'

import { AdminApi } from './admin/admin.api'

export namespace Api {
  export class Ai extends AiApi {}
  export class Authentication extends AuthenticationApi {}
  export class Authorization extends AuthorizationApi {}
  export class Billing extends BillingApi {}
  export class Upload extends UploadApi {}

  export class User extends UserApi {}

  export class Notification extends NotificationApi {}

  export class Question extends QuestionApi {}

  export class Answer extends AnswerApi {}

  export class VoiceCommand extends VoiceCommandApi {}

  export class VoiceResponse extends VoiceResponseApi {}

  export class TrainingData extends TrainingDataApi {}

  export class Admin extends AdminApi {}
}
