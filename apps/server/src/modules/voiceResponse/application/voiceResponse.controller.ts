import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import {
  VoiceResponse,
  VoiceResponseDomainFacade,
} from '@server/modules/voiceResponse/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { VoiceResponseApplicationEvent } from './voiceResponse.application.event'
import {
  VoiceResponseCreateDto,
  VoiceResponseUpdateDto,
} from './voiceResponse.dto'

@Controller('/v1/voiceResponses')
export class VoiceResponseController {
  constructor(
    private eventService: EventService,
    private voiceResponseDomainFacade: VoiceResponseDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.voiceResponseDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: VoiceResponseCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.voiceResponseDomainFacade.create(body)

    await this.eventService.emit<VoiceResponseApplicationEvent.VoiceResponseCreated.Payload>(
      VoiceResponseApplicationEvent.VoiceResponseCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:voiceResponseId')
  async findOne(
    @Param('voiceResponseId') voiceResponseId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.voiceResponseDomainFacade.findOneByIdOrFail(
      voiceResponseId,
      queryOptions,
    )

    return item
  }

  @Patch('/:voiceResponseId')
  async update(
    @Param('voiceResponseId') voiceResponseId: string,
    @Body() body: VoiceResponseUpdateDto,
  ) {
    const item =
      await this.voiceResponseDomainFacade.findOneByIdOrFail(voiceResponseId)

    const itemUpdated = await this.voiceResponseDomainFacade.update(
      item,
      body as Partial<VoiceResponse>,
    )
    return itemUpdated
  }

  @Delete('/:voiceResponseId')
  async delete(@Param('voiceResponseId') voiceResponseId: string) {
    const item =
      await this.voiceResponseDomainFacade.findOneByIdOrFail(voiceResponseId)

    await this.voiceResponseDomainFacade.delete(item)

    return item
  }
}
