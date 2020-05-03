import { IsNotEmpty } from 'class-validator';

export default class CreateResourceDTO {
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'DisplayId field cannot be empty' })
  displayId: string;

  @IsNotEmpty({ message: 'Type field cannot be empty' })
  type: string;

  @IsNotEmpty({ message: 'CenterId field cannot be empty' })
  centerId: string;

  author: string;

  toyPieces: number;
}
