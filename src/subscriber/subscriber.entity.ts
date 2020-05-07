import {
  BaseEntity,
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import Center from 'src/center/center.entity';
import Member from 'src/member/member.entity';
import Membership from 'src/membership/membership.entity';

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

  @Column('char')
  gender: string;

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

  @Column('boolean', { default: true })
  active: boolean;

  @ManyToOne(() => Center, { eager: true })
  center: Center;

  @ManyToOne(() => Member, { eager: true })
  createdBy: Member;

  @ManyToOne(() => Member, { eager: true })
  updatedBy: Member;

  @OneToOne(
    () => Membership,
    membership => membership.subscriber,
    { eager: true, cascade: true },
  )
  @JoinColumn()
  membership: Membership;

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
