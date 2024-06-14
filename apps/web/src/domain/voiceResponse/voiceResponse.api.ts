import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { VoiceResponse } from './voiceResponse.model'

export class VoiceResponseApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<VoiceResponse>,
  ): Promise<VoiceResponse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/voiceResponses${buildOptions}`)
  }

  static findOne(
    voiceResponseId: string,
    queryOptions?: ApiHelper.QueryOptions<VoiceResponse>,
  ): Promise<VoiceResponse> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/voiceResponses/${voiceResponseId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<VoiceResponse>): Promise<VoiceResponse> {
    return HttpService.api.post(`/v1/voiceResponses`, values)
  }

  static updateOne(
    voiceResponseId: string,
    values: Partial<VoiceResponse>,
  ): Promise<VoiceResponse> {
    return HttpService.api.patch(
      `/v1/voiceResponses/${voiceResponseId}`,
      values,
    )
  }

  static deleteOne(voiceResponseId: string): Promise<void> {
    return HttpService.api.delete(`/v1/voiceResponses/${voiceResponseId}`)
  }

  static findManyByAnswerId(
    answerId: string,
    queryOptions?: ApiHelper.QueryOptions<VoiceResponse>,
  ): Promise<VoiceResponse[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/answers/answer/${answerId}/voiceResponses${buildOptions}`,
    )
  }

  static createOneByAnswerId(
    answerId: string,
    values: Partial<VoiceResponse>,
  ): Promise<VoiceResponse> {
    return HttpService.api.post(
      `/v1/answers/answer/${answerId}/voiceResponses`,
      values,
    )
  }
}
