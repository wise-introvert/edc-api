import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ResourceType } from '../model';
import Center from 'src/center/center.entity';

export default class UpdateResourceDTO {
  @IsNotEmpty()
  name?: string;

  @IsNotEmpty()
  displayId?: string;

  @IsNotEmpty()
  type?: ResourceType;

  @IsNotEmpty()
  center?: Center;

  @IsString()
  author?: string;

  @IsInt()
  toyPieces?: number;
}
