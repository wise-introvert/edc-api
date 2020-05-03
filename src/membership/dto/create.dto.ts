import { IsNotEmpty } from 'class-validator';
import MembershipType from 'src/membership_type/membership_type.entity';

export default class CreateMembershipDTO {
  @IsNotEmpty({ message: 'membershipType field cannot be empty' })
  membershipType: MembershipType;

  @IsNotEmpty({ message: 'Subscriber field cannot be empty' })
  subscriberId: string;

  @IsNotEmpty({ message: 'Duration field cannot be empty' })
  duration: number;

  @IsNotEmpty({ message: 'Fees field cannot be empty' })
  fees: number;
}
