import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { VoiceResponseDomainFacade } from './voiceResponse.domain.facade'
import { VoiceResponse } from './voiceResponse.model'

@Module({
  imports: [TypeOrmModule.forFeature([VoiceResponse]), DatabaseHelperModule],
  providers: [VoiceResponseDomainFacade, VoiceResponseDomainFacade],
  exports: [VoiceResponseDomainFacade],
})
export class VoiceResponseDomainModule {}
