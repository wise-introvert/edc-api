import { Injectable } from '@nestjs/common';
import MembershipTypeRepo from './membership_type.repo';
import MembershipType from './membership_type.entity';
import { CreateMembershipTypeDTO, UpdateMembershipTypeDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import Member from 'src/member/member.entity';

@Injectable()
export class MembershipTypeService {
  constructor(
    @InjectRepository(MembershipTypeRepo) private repo: MembershipTypeRepo,
  ) {}

  async get(
    id?: string,
    q?: string,
  ): Promise<MembershipType | MembershipType[]> {
    return this.repo.get(id, q);
  }

  async createMembershipType(
    dto: CreateMembershipTypeDTO,
    member: Member
  ): Promise<MembershipType> {
    return this.repo.createMembershipType(dto, member);
  }

  async updateMembershipType(
    id: string,
    dto: UpdateMembershipTypeDTO,
    member: Member
  ): Promise<void> {
    return this.repo.updateMembershipType(id, dto, member);
  }

  async deleteMembershipType(id: string): Promise<boolean> {
    return this.repo.deleteMembershipType(id);
  }
}
