import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Answer } from './answer.model'

export class AnswerApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Answer>,
  ): Promise<Answer[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/answers${buildOptions}`)
  }

  static findOne(
    answerId: string,
    queryOptions?: ApiHelper.QueryOptions<Answer>,
  ): Promise<Answer> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/answers/${answerId}${buildOptions}`)
  }

  static createOne(values: Partial<Answer>): Promise<Answer> {
    return HttpService.api.post(`/v1/answers`, values)
  }

  static updateOne(answerId: string, values: Partial<Answer>): Promise<Answer> {
    return HttpService.api.patch(`/v1/answers/${answerId}`, values)
  }

  static deleteOne(answerId: string): Promise<void> {
    return HttpService.api.delete(`/v1/answers/${answerId}`)
  }

  static findManyByQuestionId(
    questionId: string,
    queryOptions?: ApiHelper.QueryOptions<Answer>,
  ): Promise<Answer[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/questions/question/${questionId}/answers${buildOptions}`,
    )
  }

  static createOneByQuestionId(
    questionId: string,
    values: Partial<Answer>,
  ): Promise<Answer> {
    return HttpService.api.post(
      `/v1/questions/question/${questionId}/answers`,
      values,
    )
  }
}
