import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { LOA } from './model';
import { hash } from './util';
import Center from 'src/center/center.entity';

@Entity('members')
export default class Member extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column('varchar', { length: 50 })
  username: string;

  @Column('text')
  password: string;

  @Column('int', { nullable: true, default: LOA.MEMBER })
  loa: LOA;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToOne(() => Center)
  center: Center;

  @BeforeInsert()
  async setup() {
    this.id = uuid();
    const timestamp: Date = new Date();
    this.created = timestamp;
    this.updated = timestamp;
    this.password = await hash(this.password);
  }

  @BeforeUpdate()
  update() {
    const timestamp: Date = new Date();
    this.updated = timestamp;
  }
}
