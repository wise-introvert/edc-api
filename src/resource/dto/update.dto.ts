import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';
import { ResourceType } from '../model';
import Center from 'src/center/center.entity';

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
  @IsNotEmpty()
  center?: Center;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsInt()
  toyPieces?: number;
}
