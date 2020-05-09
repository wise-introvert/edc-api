import { IsNotEmpty } from 'class-validator';
import { ValidMembershipTypes } from '../model';

export default class CreateMembershipTypeDTO {
  @IsNotEmpty({ message: 'Type field cannot be empty' })
  type: ValidMembershipTypes;
}
