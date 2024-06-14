import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { VoiceCommand } from './voiceCommand.model'

export class VoiceCommandApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<VoiceCommand>,
  ): Promise<VoiceCommand[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/voiceCommands${buildOptions}`)
  }

  static findOne(
    voiceCommandId: string,
    queryOptions?: ApiHelper.QueryOptions<VoiceCommand>,
  ): Promise<VoiceCommand> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/voiceCommands/${voiceCommandId}${buildOptions}`,
    )
  }

  static createOne(values: Partial<VoiceCommand>): Promise<VoiceCommand> {
    return HttpService.api.post(`/v1/voiceCommands`, values)
  }

  static updateOne(
    voiceCommandId: string,
    values: Partial<VoiceCommand>,
  ): Promise<VoiceCommand> {
    return HttpService.api.patch(`/v1/voiceCommands/${voiceCommandId}`, values)
  }

  static deleteOne(voiceCommandId: string): Promise<void> {
    return HttpService.api.delete(`/v1/voiceCommands/${voiceCommandId}`)
  }

  static findManyByUserId(
    userId: string,
    queryOptions?: ApiHelper.QueryOptions<VoiceCommand>,
  ): Promise<VoiceCommand[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/users/user/${userId}/voiceCommands${buildOptions}`,
    )
  }

  static createOneByUserId(
    userId: string,
    values: Partial<VoiceCommand>,
  ): Promise<VoiceCommand> {
    return HttpService.api.post(
      `/v1/users/user/${userId}/voiceCommands`,
      values,
    )
  }
}
