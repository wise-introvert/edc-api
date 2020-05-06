import { IsOptional } from 'class-validator';
import Center from 'src/center/center.entity';

export default class UpdateSubscriberDTO {
  @IsOptional()
  firstName: string;

  @IsOptional()
  middleName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  membershipId: string;

  @IsOptional()
  center: Center;
}
