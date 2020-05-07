import {
  IsNotEmpty,
  IsPhoneNumber,
  IsOptional,
  IsInt,
  IsString,
} from 'class-validator';
import Center from 'src/center/center.entity';
import { Duration } from 'src/membership/model';

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
  center: Center;

  @IsNotEmpty()
  @IsInt()
  membershipFees: number;

  @IsNotEmpty()
  @IsString()
  membershipDuration: Duration;

  @IsNotEmpty()
  @IsString()
  membershipType: string;
}
