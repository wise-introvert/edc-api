import { IsNotEmpty } from 'class-validator';
import { ResourceType } from '../model';

export default class UpdateResourceDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  displayId?: string;

  @IsNotEmpty()
  type?: ResourceType;

  author?: string;

  toyPieces?: number;
}
