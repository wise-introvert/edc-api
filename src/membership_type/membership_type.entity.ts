import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Center from '../center/center.entity';


@Entity("membership_types")
export default class MembershipType extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  name: string;

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
