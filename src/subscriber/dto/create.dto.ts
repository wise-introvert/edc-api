import {
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional,
  IsInt,
  IsString,
} from 'class-validator';
import { Duration } from 'src/membership/model';
import MembershipType from 'src/membership_type/membership_type.entity';

export default class CreateSubscriberDTO {
  @IsNotEmpty()
  displayId: string;

  @IsNotEmpty()
  firstName: string;

  middleName: string;

  @IsNotEmpty()
  lastName: string;

  motherName: string;

  fatherName: string;

  @IsNotEmpty()
  dob: Date;

  @IsNotEmpty()
  gender: string;

  @IsOptional()
  @IsPhoneNumber('in')
  motherPhoneNumber: any;

  @IsOptional()
  @IsPhoneNumber('in')
  fatherPhoneNumber: any;

  @IsOptional()
  school: string;

  @IsOptional()
  curriculum: string;

  @IsNotEmpty()
  @IsInt()
  membershipFees: number;

  @IsNotEmpty()
  @IsString()
  membershipDuration: Duration;

  @IsNotEmpty()
  @IsString()
  membershipType: MembershipType;
}
