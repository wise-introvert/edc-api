import { Injectable } from '@nestjs/common';
import MembershipRepo from './membership.repo';
import Membership from './membership.entity';
import { CreateMembershipDTO, UpdateMembershipDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MembershipService {
  constructor(@InjectRepository(MembershipRepo) private repo: MembershipRepo) {}

  async get(id?: string, q?: string): Promise<Membership | Membership[]> {
    return this.repo.get(id, q);
  }

  async createMembership(dto: CreateMembershipDTO): Promise<Membership> {
    return this.repo.createMembership(dto);
  }

  async updateMembership(id: string, dto: UpdateMembershipDTO): Promise<void> {
    return this.repo.updateMembership(id, dto);
  }

  async deleteMembership(id: string): Promise<boolean> {
    return this.repo.deleteMembership(id);
  }
}
