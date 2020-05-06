import { IsOptional } from 'class-validator';
import Center from 'src/center/center.entity';

export default class UpdateMembershipTypeDTO {
  @IsOptional()
  type?: string;

  @IsOptional()
  center: Center;
}
