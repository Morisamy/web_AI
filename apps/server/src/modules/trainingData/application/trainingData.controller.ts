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
  TrainingData,
  TrainingDataDomainFacade,
} from '@server/modules/trainingData/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { TrainingDataApplicationEvent } from './trainingData.application.event'
import {
  TrainingDataCreateDto,
  TrainingDataUpdateDto,
} from './trainingData.dto'

@Controller('/v1/trainingDatas')
export class TrainingDataController {
  constructor(
    private eventService: EventService,
    private trainingDataDomainFacade: TrainingDataDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.trainingDataDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: TrainingDataCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.trainingDataDomainFacade.create(body)

    await this.eventService.emit<TrainingDataApplicationEvent.TrainingDataCreated.Payload>(
      TrainingDataApplicationEvent.TrainingDataCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:trainingDataId')
  async findOne(
    @Param('trainingDataId') trainingDataId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.trainingDataDomainFacade.findOneByIdOrFail(
      trainingDataId,
      queryOptions,
    )

    return item
  }

  @Patch('/:trainingDataId')
  async update(
    @Param('trainingDataId') trainingDataId: string,
    @Body() body: TrainingDataUpdateDto,
  ) {
    const item =
      await this.trainingDataDomainFacade.findOneByIdOrFail(trainingDataId)

    const itemUpdated = await this.trainingDataDomainFacade.update(
      item,
      body as Partial<TrainingData>,
    )
    return itemUpdated
  }

  @Delete('/:trainingDataId')
  async delete(@Param('trainingDataId') trainingDataId: string) {
    const item =
      await this.trainingDataDomainFacade.findOneByIdOrFail(trainingDataId)

    await this.trainingDataDomainFacade.delete(item)

    return item
  }
}
