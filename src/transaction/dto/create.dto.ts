import { TransactionType } from '../model';
import Subscriber from '../../subscriber/subscriber.entity';
import Resource from 'src/resource/resource.entity';
import { IsNotEmpty, IsOptional, IsInt, IsString } from 'class-validator';

export default class CreateTransactionDTO {
  @IsNotEmpty()
  type: TransactionType;

  @IsNotEmpty()
  subscriber: Subscriber;

  @IsNotEmpty()
  resource: Resource;

  @IsOptional()
  @IsString()
  remarks?: string;

  @IsOptional()
  @IsInt()
  penalty: number;
}
