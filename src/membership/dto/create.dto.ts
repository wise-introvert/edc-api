import { IsNotEmpty } from 'class-validator';
import Center from 'src/center/center.entity';
import { Duration } from '../model';
import MembershipType from 'src/membership_type/membership_type.entity';

export default class CreateMembershipDTO {
  @IsNotEmpty({ message: 'Duration field cannot be empty' })
  duration: Duration;

  @IsNotEmpty({ message: 'Fees field cannot be empty' })
  fees: number;

  @IsNotEmpty({ message: 'Membership Type cannot be empty' })
  membershipType: MembershipType;
}
