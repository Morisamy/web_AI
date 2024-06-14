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

import { Answer } from '../../../modules/answer/domain'

@Entity()
export class VoiceResponse {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  response: string

  @Column({})
  answerId: string

  @ManyToOne(() => Answer, parent => parent.voiceResponses)
  @JoinColumn({ name: 'answerId' })
  answer?: Answer

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
