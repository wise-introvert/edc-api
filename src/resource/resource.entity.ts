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

  @Column({ nullable: true })
  author: string;

  @Column({ nullable: true })
  toyPieces: number;

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
