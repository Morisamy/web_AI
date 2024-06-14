import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TrainingDataDomainFacade } from './trainingData.domain.facade'
import { TrainingData } from './trainingData.model'

@Module({
  imports: [TypeOrmModule.forFeature([TrainingData]), DatabaseHelperModule],
  providers: [TrainingDataDomainFacade, TrainingDataDomainFacade],
  exports: [TrainingDataDomainFacade],
})
export class TrainingDataDomainModule {}
