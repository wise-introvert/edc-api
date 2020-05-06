import { Repository, EntityRepository } from 'typeorm';
import MembershipType from './membership_type.entity';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateMembershipTypeDTO, UpdateMembershipTypeDTO } from './dto';
import Member from 'src/member/member.entity';

@EntityRepository(MembershipType)
export default class MembershipTypeRepo extends Repository<MembershipType> {
  /**
   * @param       id { optional, String } id of required membershipType
   * @param       q { optional, String } search query
   * @description get memberships either using id, search query or get all membershipType
   */
  async get(
    id?: string,
    q?: string,
  ): Promise<MembershipType[] | MembershipType> {
    if (id) {
      const membershipType: MembershipType = await MembershipType.findOne(id);
      if (!membershipType) {
        throw new NotFoundException('Requested membershipType does not exits');
      }

      return membershipType;
    } else {
      const queryBuilder = MembershipType.createQueryBuilder();
      if (q) {
        const memberships: MembershipType[] = await queryBuilder
          .where('name LIKE :q', { q: `%${q}%` })
          .getMany();
        return memberships;
      } else {
        const memberships: MembershipType[] = await MembershipType.find();
        return memberships;
      }
    }
  }

  // create a membershipType
  async createMembershipType(
    dto: CreateMembershipTypeDTO,
    member: Member,
  ): Promise<MembershipType> {
    const membershipType: MembershipType = MembershipType.create({
      ...dto,
      createdBy: member,
    });
    await membershipType.save();
    return membershipType;
  }

  // update a membershipType
  async updateMembershipType(
    id: string,
    dto: UpdateMembershipTypeDTO,
    member: Member,
  ): Promise<void> {
    const queryBuilder = MembershipType.createQueryBuilder();
    await queryBuilder
      .update()
      .set({ ...dto, updatedBy: member })
      .where('id = :id', { id })
      .execute();
  }

  // delete a membershipType
  async deleteMembershipType(id: string): Promise<boolean> {
    try {
      await MembershipType.delete(id);
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
