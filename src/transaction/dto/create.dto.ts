import { TransactionType } from '../model';
import Subscriber from '../../subscriber/subscriber.entity';
import Resource from 'src/resource/resource.entity';

export default class CreateTransactionDTO {
  subscriber: Subscriber;
  type: TransactionType;
  resource: Resource;
  remarks?: string;
}
