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
  VoiceCommand,
  VoiceCommandDomainFacade,
} from '@server/modules/voiceCommand/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { VoiceCommandApplicationEvent } from './voiceCommand.application.event'
import {
  VoiceCommandCreateDto,
  VoiceCommandUpdateDto,
} from './voiceCommand.dto'

@Controller('/v1/voiceCommands')
export class VoiceCommandController {
  constructor(
    private eventService: EventService,
    private voiceCommandDomainFacade: VoiceCommandDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.voiceCommandDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: VoiceCommandCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.voiceCommandDomainFacade.create(body)

    await this.eventService.emit<VoiceCommandApplicationEvent.VoiceCommandCreated.Payload>(
      VoiceCommandApplicationEvent.VoiceCommandCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:voiceCommandId')
  async findOne(
    @Param('voiceCommandId') voiceCommandId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.voiceCommandDomainFacade.findOneByIdOrFail(
      voiceCommandId,
      queryOptions,
    )

    return item
  }

  @Patch('/:voiceCommandId')
  async update(
    @Param('voiceCommandId') voiceCommandId: string,
    @Body() body: VoiceCommandUpdateDto,
  ) {
    const item =
      await this.voiceCommandDomainFacade.findOneByIdOrFail(voiceCommandId)

    const itemUpdated = await this.voiceCommandDomainFacade.update(
      item,
      body as Partial<VoiceCommand>,
    )
    return itemUpdated
  }

  @Delete('/:voiceCommandId')
  async delete(@Param('voiceCommandId') voiceCommandId: string) {
    const item =
      await this.voiceCommandDomainFacade.findOneByIdOrFail(voiceCommandId)

    await this.voiceCommandDomainFacade.delete(item)

    return item
  }
}
