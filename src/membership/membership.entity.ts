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

@Entity('memberships')
export default class Membership extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  duration: string;

  @Column()
  fees: number;

  @CreateDateColumn()
  created: number;

  @UpdateDateColumn()
  updated: number;

  @Column({ nullable: true })
  createdBy: string;

  @Column({ nullable: true })
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
