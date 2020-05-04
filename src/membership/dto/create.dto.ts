import { IsNotEmpty } from 'class-validator';

export default class CreateMembershipDTO {
  @IsNotEmpty({ message: 'Duration field cannot be empty' })
  duration: string;

  @IsNotEmpty({ message: 'Fees field cannot be empty' })
  fees: number;
}
