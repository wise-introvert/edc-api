import { IsNotEmpty } from 'class-validator';
import Center from 'src/center/center.entity';

export default class CreateMembershipTypeDTO {
  @IsNotEmpty({ message: 'Type field cannot be empty' })
  type: string;

  @IsNotEmpty()
  center: Center;
}
