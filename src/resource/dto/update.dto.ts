import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';
import { ResourceType } from '../model';

export default class UpdateResourceDTO {
  @IsOptional()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsNotEmpty()
  displayId?: string;

  @IsOptional()
  @IsNotEmpty()
  type?: ResourceType;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsInt()
  toyPieces?: number;
}
