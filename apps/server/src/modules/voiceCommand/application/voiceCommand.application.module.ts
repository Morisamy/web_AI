import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { VoiceCommandDomainModule } from '../domain'
import { VoiceCommandController } from './voiceCommand.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { VoiceCommandByUserController } from './voiceCommandByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    VoiceCommandDomainModule,

    UserDomainModule,
  ],
  controllers: [VoiceCommandController, VoiceCommandByUserController],
  providers: [],
})
export class VoiceCommandApplicationModule {}
