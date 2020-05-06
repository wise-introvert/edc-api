import { IsNotEmpty, IsInt } from 'class-validator';

import { LOA } from '../model';
import Center from 'src/center/center.entity';

export default class UpdateMemberDTO {
  @IsNotEmpty()
  username?: string;

  @IsInt()
  loa?: LOA;

  center: Center;
}
