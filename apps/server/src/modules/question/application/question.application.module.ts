import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { QuestionDomainModule } from '../domain'
import { QuestionController } from './question.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { QuestionByUserController } from './questionByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, QuestionDomainModule, UserDomainModule],
  controllers: [QuestionController, QuestionByUserController],
  providers: [],
})
export class QuestionApplicationModule {}
