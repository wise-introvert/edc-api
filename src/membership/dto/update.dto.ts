import { IsOptional } from 'class-validator';
import { Duration } from '../model';
import MembershipType from 'src/membership_type/membership_type.entity';
import Subscriber from '../../subscriber/subscriber.entity';

export default class UpdateMembershipDTO {
  @IsOptional()
  duration: Duration;

  @IsOptional()
  fees: number;

  @IsOptional()
  membershipType: MembershipType;

  @IsOptional()
  subscriber: Subscriber;
}
