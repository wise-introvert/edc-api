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
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Center from '../center/center.entity';

@Entity('resources')
export default class Resource extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  displayId: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  author: string;

  @Column()
  toyPieces: number;

  @CreateDateColumn()
  created: number;

  @UpdateDateColumn()
  updated: number;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @OneToOne(type => Center)
  @JoinColumn({ name: 'centerId' })
  center: Center;

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
