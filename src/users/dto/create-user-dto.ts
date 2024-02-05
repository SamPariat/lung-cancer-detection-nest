import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

import { allowedGenders, isNumberOptions } from '../../constants';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(1)
  @IsIn(allowedGenders)
  gender: string;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(1)
  @Max(130)
  age: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  smoking: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  yellowFingers: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  anxiety: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  peerPressure: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  chronicDisease: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  fatigue: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  allergy: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  wheezing: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  alchoholConsuming: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  coughing: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  shortnessOfBreath: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  swallowingDifficulty: number;

  @IsNotEmpty()
  @IsNumber(isNumberOptions)
  @Min(0)
  @Max(2)
  chestPain: number;
}
