import { IsNotEmpty, IsInt, IsPhoneNumber, IsOptional } from 'class-validator';

export default class CreateSubscriberDTO {
  @IsNotEmpty()
  displayId: string;

  @IsNotEmpty()
  firstName: string;

  middleName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  centerId: string;

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
}
