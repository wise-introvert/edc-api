import { IsNotEmpty, IsPhoneNumber, IsOptional } from 'class-validator';
import Center from 'src/center/center.entity';

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
}
