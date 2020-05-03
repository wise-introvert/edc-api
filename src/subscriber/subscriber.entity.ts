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
  Unique,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Center from '../center/center.entity';

@Entity('subscribers')
@Unique(['displayId'])
export default class Subscriber extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column({ unique: true })
  displayId: string;

  @Column()
  firstName: string;

  @Column({ nullable: true })
  middleName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  motherName?: string | null;

  @Column({ nullable: true })
  fatherName?: string | null;

  @Column({ type: 'timestamp', precision: 6, nullable: true })
  dob: Date;

  @Column()
  gender: number; // 0 = MALE, 1 = FEMALE

  @Column('bigint', { nullable: true })
  motherPhoneNumber?: number | null;

  @Column('bigint', { nullable: true })
  fatherPhoneNumber?: number | null;

  @Column({ nullable: true })
  school?: string;

  @Column({ nullable: true })
  curriculum?: string;

  @Column({ type: 'timestamp', precision: 6 })
  joinedOn: Date;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @Column()
  centerId: string;
  @OneToOne(type => Center)
  @JoinColumn({ name: 'centerId' })
  center: Center;

  @BeforeInsert()
  setup() {
    this.id = uuid();
    const timestamp: Date = new Date();
    this.created = timestamp;
    this.joinedOn = timestamp;
    this.updated = timestamp;
  }

  @BeforeUpdate()
  update() {
    const timestamp: Date = new Date();
    this.updated = timestamp;
  }
}
