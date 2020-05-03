import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import MembershipType from '../membership_type/membership_type.entity';
import Subscriber from '../subscriber/subscriber.entity';



@Entity("memberships")
export default class Membership extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  membershipTypeId: string;
  @OneToOne(type => MembershipType)
  @JoinColumn({ name: 'membershipTypeId' })
  membershipType: MembershipType;

  @Column()
  subscriberId: string;
  @OneToOne(type => Subscriber)
  @JoinColumn({ name: 'subscriberId' })
  subscriber: Subscriber;

  @Column()
  duration: number;

  @Column()
  fees: number;

  @CreateDateColumn()
  created: number;

  @UpdateDateColumn()
  updated: number;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;


  @BeforeInsert()
  setup() {
    this.id = uuid();
    const timestamp: number = new Date().getTime();
    this.created = timestamp;
    this.updated = timestamp;
  }

  @BeforeUpdate()
  update() {
    const timestamp: number = new Date().getTime();
    this.updated = timestamp;
  }
}
