import { IsOptional } from 'class-validator';
import { ValidMembershipTypes } from '../model';

export default class UpdateMembershipTypeDTO {
  @IsOptional()
  type: ValidMembershipTypes;
}
