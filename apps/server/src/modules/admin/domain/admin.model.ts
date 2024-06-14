import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { TrainingData } from '../../../modules/trainingData/domain'

@Entity()
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  email: string

  @Column({})
  password: string

  @OneToMany(() => TrainingData, child => child.admin)
  trainingDatas?: TrainingData[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
