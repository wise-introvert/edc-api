import { TransactionType } from '../model';
import Subscriber from '../../subscriber/subscriber.entity';
import Resource from 'src/resource/resource.entity';
import { IsNotEmpty } from 'class-validator';

export default class CreateTransactionDTO {
  @IsNotEmpty()
  type: TransactionType;

  @IsNotEmpty()
  subscriber: Subscriber;

  @IsNotEmpty()
  resource: Resource;

  @IsNotEmpty()
  remarks?: string;
}
