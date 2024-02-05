import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

import { allowedGenders, isNumberOptions } from '../../constants';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @MaxLength(1)
  @IsIn(allowedGenders)
  gender?: string;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  age?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  smoking?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  yellowFingers?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  anxiety?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  peerPressure?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  chronicDisease?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  fatigue?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  allergy?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  wheezing?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  alchoholConsuming?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  coughing?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  shortnessOfBreath?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  swallowingDifficulty?: number;

  @IsOptional()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  chestPain?: number;
}
