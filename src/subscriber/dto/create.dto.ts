import { IsNotEmpty, IsPhoneNumber, IsOptional } from 'class-validator';
import Membership from 'src/membership/membership.entity';

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
  gender: number; // 0 = MALE, 1 = FEMALE

  @IsOptional()
  @IsPhoneNumber('in')
  motherPhoneNumber: number;

  @IsOptional()
  @IsPhoneNumber('in')
  fatherPhoneNumber: number;

  school: string;

  curriculum: string;

  @IsNotEmpty()
  membership: Membership;
}
