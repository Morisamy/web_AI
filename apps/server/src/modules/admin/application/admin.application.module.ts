import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AdminDomainModule } from '../domain'
import { AdminController } from './admin.controller'

@Module({
  imports: [AuthenticationDomainModule, AdminDomainModule],
  controllers: [AdminController],
  providers: [],
})
export class AdminApplicationModule {}
