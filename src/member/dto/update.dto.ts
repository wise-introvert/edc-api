import { IsNotEmpty, IsInt, IsOptional, IsBoolean } from 'class-validator';

import { LOA } from '../model';
import Center from 'src/center/center.entity';

export default class UpdateMemberDTO {
  @IsOptional()
  @IsNotEmpty()
  username?: string;

  @IsOptional()
  @IsInt()
  loa?: LOA;

  @IsOptional()
  center: Center;

  @IsOptional()
  @IsBoolean()
  active: boolean;
}
