import { IsOptional } from 'class-validator';
import Center from 'src/center/center.entity';
import { ValidMembershipTypes } from '../model';

export default class UpdateMembershipTypeDTO {
  @IsOptional()
  type: ValidMembershipTypes;

  @IsOptional()
  center: Center;
}
