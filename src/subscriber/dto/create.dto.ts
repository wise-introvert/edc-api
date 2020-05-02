import { IsNotEmpty } from 'class-validator';

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
}
