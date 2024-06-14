import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { TrainingData } from './trainingData.model'

export class TrainingDataApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<TrainingData>,
  ): Promise<TrainingData[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/trainingDatas${buildOptions}`)
  }

  static findOne(
    trainingDataId: string,
    queryOptions?: ApiHelper.QueryOptions<TrainingData>,
  ): Promise<TrainingData> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/trainingDatas/${trainingDataId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<TrainingData>): Promise<TrainingData> {
    return HttpService.api.post(`/v1/trainingDatas`, values)
  }

  static updateOne(
    trainingDataId: string,
    values: Partial<TrainingData>,
  ): Promise<TrainingData> {
    return HttpService.api.patch(`/v1/trainingDatas/${trainingDataId}`, values)
  }

  static deleteOne(trainingDataId: string): Promise<void> {
    return HttpService.api.delete(`/v1/trainingDatas/${trainingDataId}`)
  }

  static findManyByAdminId(
    adminId: string,
    queryOptions?: ApiHelper.QueryOptions<TrainingData>,
  ): Promise<TrainingData[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/admins/admin/${adminId}/trainingDatas${buildOptions}`,
    )
  }

  static createOneByAdminId(
    adminId: string,
    values: Partial<TrainingData>,
  ): Promise<TrainingData> {
    return HttpService.api.post(
      `/v1/admins/admin/${adminId}/trainingDatas`,
      values,
    )
  }
}
