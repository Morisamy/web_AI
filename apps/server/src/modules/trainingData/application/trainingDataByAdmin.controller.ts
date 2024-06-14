import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { TrainingDataDomainFacade } from '@server/modules/trainingData/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { TrainingDataApplicationEvent } from './trainingData.application.event'
import { TrainingDataCreateDto } from './trainingData.dto'

import { AdminDomainFacade } from '../../admin/domain'

@Controller('/v1/admins')
export class TrainingDataByAdminController {
  constructor(
    private adminDomainFacade: AdminDomainFacade,

    private trainingDataDomainFacade: TrainingDataDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/admin/:adminId/trainingDatas')
  async findManyAdminId(
    @Param('adminId') adminId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.adminDomainFacade.findOneByIdOrFail(adminId)

    const items = await this.trainingDataDomainFacade.findManyByAdmin(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/admin/:adminId/trainingDatas')
  async createByAdminId(
    @Param('adminId') adminId: string,
    @Body() body: TrainingDataCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, adminId }

    const item = await this.trainingDataDomainFacade.create(valuesUpdated)

    await this.eventService.emit<TrainingDataApplicationEvent.TrainingDataCreated.Payload>(
      TrainingDataApplicationEvent.TrainingDataCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
