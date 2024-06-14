import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Answer } from './answer.model'

import { Question } from '../../question/domain'

@Injectable()
export class AnswerDomainFacade {
  constructor(
    @InjectRepository(Answer)
    private repository: Repository<Answer>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Answer>): Promise<Answer> {
    return this.repository.save(values)
  }

  async update(item: Answer, values: Partial<Answer>): Promise<Answer> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Answer): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Answer> = {},
  ): Promise<Answer[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Answer> = {},
  ): Promise<Answer> {
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

  async findManyByQuestion(
    item: Question,
    queryOptions: RequestHelper.QueryOptions<Answer> = {},
  ): Promise<Answer[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('question')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        questionId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
