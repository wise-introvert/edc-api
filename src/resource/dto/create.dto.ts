import { IsNotEmpty } from 'class-validator';
import { ResourceType } from '../model';

export default class CreateResourceDTO {
  @IsNotEmpty({ message: 'Name field cannot be empty' })
  name: string;

  @IsNotEmpty({ message: 'DisplayId field cannot be empty' })
  displayId: string;

  @IsNotEmpty({ message: 'Type field cannot be empty' })
  type: ResourceType;

  author: string;

  toyPieces: number;
}
