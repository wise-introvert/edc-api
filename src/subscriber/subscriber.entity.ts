import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Center from '../center/center.entity';

@Entity('subscribers')
export default class Subscriber extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  displayId: string;

  @Column()
  firstName: string;

  @Column()
  middleName: string;

  @Column()
  lastName: string;

  @Column('bigint')
  joinedOn: number;

  @CreateDateColumn()
  created: number;

  @UpdateDateColumn()
  updated: number;

  @Column()
  centerId: string;
  @OneToOne(type => Center)
  @JoinColumn({ name: 'centerId' })
  center: Center;

  @BeforeInsert()
  setup() {
    this.id = uuid();
    const timestamp: number = new Date().getTime();
    this.created = timestamp;
    this.joinedOn = timestamp;
    this.updated = timestamp;
  }

  @BeforeUpdate()
  update() {
    const timestamp: number = new Date().getTime();
    this.updated = timestamp;
  }
}
