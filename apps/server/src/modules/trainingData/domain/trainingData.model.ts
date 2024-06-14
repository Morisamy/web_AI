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

import { Admin } from '../../../modules/admin/domain'

@Entity()
export class TrainingData {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  data: string

  @Column({})
  adminId: string

  @ManyToOne(() => Admin, parent => parent.trainingDatas)
  @JoinColumn({ name: 'adminId' })
  admin?: Admin

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
