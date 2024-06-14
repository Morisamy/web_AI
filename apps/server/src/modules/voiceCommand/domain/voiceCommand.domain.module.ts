import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { VoiceCommandDomainFacade } from './voiceCommand.domain.facade'
import { VoiceCommand } from './voiceCommand.model'

@Module({
  imports: [TypeOrmModule.forFeature([VoiceCommand]), DatabaseHelperModule],
  providers: [VoiceCommandDomainFacade, VoiceCommandDomainFacade],
  exports: [VoiceCommandDomainFacade],
})
export class VoiceCommandDomainModule {}
