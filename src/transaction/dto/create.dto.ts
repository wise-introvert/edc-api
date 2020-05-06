import { TransactionType } from '../model';
import Subscriber from '../../subscriber/subscriber.entity';
import Resource from 'src/resource/resource.entity';

export default class CreateTransactionDTO {
  type: TransactionType;
  subscriber: Subscriber;
  resource: Resource;
  remarks?: string;
}
