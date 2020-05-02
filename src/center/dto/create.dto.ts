import { IsNotEmpty } from 'class-validator';

export default class CreateCenterDTO {
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  name: string;
}
