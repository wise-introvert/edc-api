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
import { ResourceType } from './model';
import Center from 'src/center/center.entity';

@Entity('resources')
export default class Resource extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  displayId: string;

  @Column()
  name: string;

  @Column()
  type: ResourceType;

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  toyPieces: number;

  @CreateDateColumn()
  created: number;

  @UpdateDateColumn()
  updated: number;

  @ManyToOne(() => Center, { eager: true })
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
