import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { QuestionDomainFacade } from '@server/modules/question/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { QuestionApplicationEvent } from './question.application.event'
import { QuestionCreateDto } from './question.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class QuestionByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private questionDomainFacade: QuestionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/questions')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.questionDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/questions')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: QuestionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.questionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<QuestionApplicationEvent.QuestionCreated.Payload>(
      QuestionApplicationEvent.QuestionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
