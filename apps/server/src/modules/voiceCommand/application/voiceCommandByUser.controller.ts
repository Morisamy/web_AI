import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { VoiceCommandDomainFacade } from '@server/modules/voiceCommand/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { VoiceCommandApplicationEvent } from './voiceCommand.application.event'
import { VoiceCommandCreateDto } from './voiceCommand.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class VoiceCommandByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private voiceCommandDomainFacade: VoiceCommandDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/voiceCommands')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.voiceCommandDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/voiceCommands')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: VoiceCommandCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

    const item = await this.voiceCommandDomainFacade.create(valuesUpdated)

    await this.eventService.emit<VoiceCommandApplicationEvent.VoiceCommandCreated.Payload>(
      VoiceCommandApplicationEvent.VoiceCommandCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
