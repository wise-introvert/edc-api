import { IsNotEmpty } from 'class-validator';

export default class CreateMembershipTypeDTO {
  @IsNotEmpty({ message: 'Type field cannot be empty' })
  name: string;
}
