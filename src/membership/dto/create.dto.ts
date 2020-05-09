import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { Duration } from '../model';
import MembershipType from 'src/membership_type/membership_type.entity';

export default class CreateMembershipDTO {
  @IsNotEmpty({ message: 'Duration field cannot be empty' })
  duration: Duration;

  @IsNotEmpty({ message: 'Fees field cannot be empty' })
  @IsInt()
  fees: number;

  @IsNotEmpty()
  @IsString()
  membershipType: MembershipType;
}
