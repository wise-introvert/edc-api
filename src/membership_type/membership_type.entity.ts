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
import Member from 'src/member/member.entity';
import Center from 'src/center/center.entity';

@Entity('membership_types')
export default class MembershipType extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  type: string;

  @UpdateDateColumn()
  updated: number;

  @CreateDateColumn()
  created: number;

  @ManyToOne(() => Center, { eager: true })
  center: Center;

  @ManyToOne(() => Member, { eager: true })
  createdBy: Member;

  @ManyToOne(() => Member, { eager: true })
  updatedBy: Member;

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
