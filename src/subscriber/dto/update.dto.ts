import { IsOptional, IsInt, IsString } from 'class-validator';
import {Duration} from 'src/membership/model';
import MembershipType from 'src/membership_type/membership_type.entity';

export default class UpdateSubscriberDTO {
  @IsOptional()
  firstName: string;

  @IsOptional()
  middleName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  @IsInt()
  membershipFees: number;

  @IsOptional()
  @IsString()
  membershipDuration: Duration;

  @IsOptional()
  @IsString()
  membershipType: MembershipType;
}
