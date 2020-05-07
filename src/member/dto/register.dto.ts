import { IsNotEmpty } from 'class-validator';

import { LOA } from '../model';
import Center from 'src/center/center.entity';

export default class RegisterDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  center: Center;

  loa: LOA;
}
