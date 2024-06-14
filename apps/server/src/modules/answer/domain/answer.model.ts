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

import { Question } from '../../../modules/question/domain'

import { VoiceResponse } from '../../../modules/voiceResponse/domain'

@Entity()
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  content: string

  @Column({})
  source: string

  @Column({})
  questionId: string

  @ManyToOne(() => Question, parent => parent.answers)
  @JoinColumn({ name: 'questionId' })
  question?: Question

  @OneToMany(() => VoiceResponse, child => child.answer)
  voiceResponses?: VoiceResponse[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
