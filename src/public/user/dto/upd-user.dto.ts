import { IsOptional, IsString, IsUrl, MaxLength, MinLength } from 'class-validator'

export class UpdUserDto {
  @IsOptional()
  @MaxLength(64)
  @IsString()
  userName?: string

  @IsOptional()
  @MaxLength(16)
  @IsString()
  rol?: string

  @IsOptional()
  @MaxLength(2)
  @MinLength(2)
  @IsString()
  language?: string

  @IsOptional()
  @MaxLength(3)
  @MinLength(3)
  @IsString()
  country?: string

  @IsOptional()
  @MaxLength(64)
  @IsString()
  firstName?: string

  @IsOptional()
  @MaxLength(128)
  @IsString()
  lastName?: string

  @IsOptional()
  @IsUrl()
  photo?: string
}
