import { Injectable } from '@nestjs/common';
import MembershipRepo from './membership.repo';
import Membership from './membership.entity';
import { CreateMembershipDTO, UpdateMembershipDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import Member from 'src/member/member.entity';

@Injectable()
export class MembershipService {
  constructor(@InjectRepository(MembershipRepo) private repo: MembershipRepo) {}

  async get(id?: string, q?: string): Promise<Membership | Membership[]> {
    return this.repo.get(id, q);
  }

  async createMembership(dto: CreateMembershipDTO, member: Member): Promise<Membership> {
    return this.repo.createMembership(dto, member);
  }

  async updateMembership(id: string, dto: UpdateMembershipDTO, member: Member): Promise<void> {
    return this.repo.updateMembership(id, dto, member);
  }

  async deleteMembership(id: string): Promise<boolean> {
    return this.repo.deleteMembership(id);
  }
}
