import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { TrainingData } from './trainingData.model'

import { Admin } from '../../admin/domain'

@Injectable()
export class TrainingDataDomainFacade {
  constructor(
    @InjectRepository(TrainingData)
    private repository: Repository<TrainingData>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<TrainingData>): Promise<TrainingData> {
    return this.repository.save(values)
  }

  async update(
    item: TrainingData,
    values: Partial<TrainingData>,
  ): Promise<TrainingData> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: TrainingData): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<TrainingData> = {},
  ): Promise<TrainingData[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<TrainingData> = {},
  ): Promise<TrainingData> {
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

  async findManyByAdmin(
    item: Admin,
    queryOptions: RequestHelper.QueryOptions<TrainingData> = {},
  ): Promise<TrainingData[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('admin')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        adminId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
