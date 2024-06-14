import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { VoiceResponse } from './voiceResponse.model'

import { Answer } from '../../answer/domain'

@Injectable()
export class VoiceResponseDomainFacade {
  constructor(
    @InjectRepository(VoiceResponse)
    private repository: Repository<VoiceResponse>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<VoiceResponse>): Promise<VoiceResponse> {
    return this.repository.save(values)
  }

  async update(
    item: VoiceResponse,
    values: Partial<VoiceResponse>,
  ): Promise<VoiceResponse> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: VoiceResponse): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<VoiceResponse> = {},
  ): Promise<VoiceResponse[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<VoiceResponse> = {},
  ): Promise<VoiceResponse> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByAnswer(
    item: Answer,
    queryOptions: RequestHelper.QueryOptions<VoiceResponse> = {},
  ): Promise<VoiceResponse[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('answer')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        answerId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
