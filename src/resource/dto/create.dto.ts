import { IsNotEmpty } from 'class-validator';
import Center from 'src/center/center.entity';

export default class CreateResourceDTO {
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'DisplayId field cannot be empty' })
  displayId: string;

  @IsNotEmpty({ message: 'Type field cannot be empty' })
  type: string;

  @IsNotEmpty({ message: 'Center field cannot be empty' })
  center: Center;

  author: string;

  toyPieces: number;
}
