import { IsNotEmpty } from 'class-validator';


export default class CreateMembershipDTO {
  @IsNotEmpty({ message: 'membershipType field cannot be empty' })
  membershipTypeId: string;

  @IsNotEmpty({ message: 'Subscriber field cannot be empty' })
  subscriberId: string;

  @IsNotEmpty({ message: 'Duration field cannot be empty' })
  duration: number;

  @IsNotEmpty({ message: 'Fees field cannot be empty' })
  fees: number;

}
