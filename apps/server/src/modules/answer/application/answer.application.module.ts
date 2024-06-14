import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AnswerDomainModule } from '../domain'
import { AnswerController } from './answer.controller'

import { QuestionDomainModule } from '../../../modules/question/domain'

import { AnswerByQuestionController } from './answerByQuestion.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AnswerDomainModule,

    QuestionDomainModule,
  ],
  controllers: [AnswerController, AnswerByQuestionController],
  providers: [],
})
export class AnswerApplicationModule {}
