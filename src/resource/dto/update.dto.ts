import { IsNotEmpty } from 'class-validator';
import Center from 'src/center/center.entity';

export default class UpdateResourceDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  displayId?: string;

  @IsNotEmpty()
  type?: string;

  author?: string;

  toyPieces?: number;
}
