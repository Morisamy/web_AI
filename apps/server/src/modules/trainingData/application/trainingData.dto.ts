import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class TrainingDataCreateDto {
  @IsString()
  @IsNotEmpty()
  data: string

  @IsString()
  @IsOptional()
  adminId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class TrainingDataUpdateDto {
  @IsString()
  @IsOptional()
  data?: string

  @IsString()
  @IsOptional()
  adminId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
