import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { VoiceCommand } from './voiceCommand.model'

import { User } from '../../user/domain'

@Injectable()
export class VoiceCommandDomainFacade {
  constructor(
    @InjectRepository(VoiceCommand)
    private repository: Repository<VoiceCommand>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<VoiceCommand>): Promise<VoiceCommand> {
    return this.repository.save(values)
  }

  async update(
    item: VoiceCommand,
    values: Partial<VoiceCommand>,
  ): Promise<VoiceCommand> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: VoiceCommand): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<VoiceCommand> = {},
  ): Promise<VoiceCommand[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<VoiceCommand> = {},
  ): Promise<VoiceCommand> {
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

  async findManyByUser(
    item: User,
    queryOptions: RequestHelper.QueryOptions<VoiceCommand> = {},
  ): Promise<VoiceCommand[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('user')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        userId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
