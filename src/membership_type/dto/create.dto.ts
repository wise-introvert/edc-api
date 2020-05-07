import { IsNotEmpty } from 'class-validator';
import Center from 'src/center/center.entity';
import { ValidMembershipTypes } from '../model';

export default class CreateMembershipTypeDTO {
  @IsNotEmpty({ message: 'Type field cannot be empty' })
  type: ValidMembershipTypes;

  @IsNotEmpty()
  center: Center;
}
