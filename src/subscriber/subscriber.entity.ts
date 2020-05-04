import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('subscribers')
export default class Subscriber extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
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

  @Column({ nullable: true })
  motherPhoneNumber?: string;

  @Column({ nullable: true })
  fatherPhoneNumber?: string;

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
