import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class VoiceResponseCreateDto {
  @IsString()
  @IsNotEmpty()
  response: string

  @IsString()
  @IsOptional()
  answerId?: string

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

export class VoiceResponseUpdateDto {
  @IsString()
  @IsOptional()
  response?: string

  @IsString()
  @IsOptional()
  answerId?: string

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
