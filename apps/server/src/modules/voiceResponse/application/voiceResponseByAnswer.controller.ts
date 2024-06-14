import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { VoiceResponseDomainFacade } from '@server/modules/voiceResponse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { VoiceResponseApplicationEvent } from './voiceResponse.application.event'
import { VoiceResponseCreateDto } from './voiceResponse.dto'

import { AnswerDomainFacade } from '../../answer/domain'

@Controller('/v1/answers')
export class VoiceResponseByAnswerController {
  constructor(
    private answerDomainFacade: AnswerDomainFacade,

    private voiceResponseDomainFacade: VoiceResponseDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/answer/:answerId/voiceResponses')
  async findManyAnswerId(
    @Param('answerId') answerId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.answerDomainFacade.findOneByIdOrFail(answerId)

    const items = await this.voiceResponseDomainFacade.findManyByAnswer(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/answer/:answerId/voiceResponses')
  async createByAnswerId(
    @Param('answerId') answerId: string,
    @Body() body: VoiceResponseCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, answerId }

    const item = await this.voiceResponseDomainFacade.create(valuesUpdated)

    await this.eventService.emit<VoiceResponseApplicationEvent.VoiceResponseCreated.Payload>(
      VoiceResponseApplicationEvent.VoiceResponseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
