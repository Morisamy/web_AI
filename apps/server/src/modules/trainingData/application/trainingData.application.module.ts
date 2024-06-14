import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TrainingDataDomainModule } from '../domain'
import { TrainingDataController } from './trainingData.controller'

import { AdminDomainModule } from '../../../modules/admin/domain'

import { TrainingDataByAdminController } from './trainingDataByAdmin.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TrainingDataDomainModule,

    AdminDomainModule,
  ],
  controllers: [TrainingDataController, TrainingDataByAdminController],
  providers: [],
})
export class TrainingDataApplicationModule {}
