import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { TransactionType } from './model';
import {} from './model';
import Subscriber from '../subscriber/subscriber.entity';
import Resource from '../resource/resource.entity';

@Entity('transactions')
export default class Transaction extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  type: TransactionType;

  @Column({ type: 'timestamp', precision: 6 })
  dateOfTransaction: Date;

  @Column({ nullable: true })
  penalty: number;

  @Column({ nullable: true })
  remarks: string;

  @CreateDateColumn()
  created: Date;

  @ManyToOne(() => Subscriber, { eager: true })
  subscriber: Subscriber;

  @ManyToOne(() => Resource, { eager: true })
  resource: Resource;

  @BeforeInsert()
  setup() {
    this.id = uuid();
    const timestamp: Date = new Date();
    this.created = timestamp;
    this.dateOfTransaction = timestamp;
  }
}
