import { IsNotEmpty } from 'class-validator';
import { LOA } from '../model';

export default class RegisterDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  loa: LOA;
}
