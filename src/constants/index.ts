import { IsNumberOptions } from 'class-validator';

const allowedGenders: readonly string[] = ['M', 'F'];

const isNumberOptions: IsNumberOptions = {
  maxDecimalPlaces: 0,
};

export { allowedGenders, isNumberOptions };
