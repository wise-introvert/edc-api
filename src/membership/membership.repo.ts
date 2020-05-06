import { Repository, EntityRepository } from 'typeorm';
import Membership from './membership.entity';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateMembershipDTO, UpdateMembershipDTO } from './dto';
import Member from 'src/member/member.entity';
import { deepRemove } from '../common';

@EntityRepository(Membership)
export default class MembershipRepo extends Repository<Membership> {
  /**
   * @param       id { optional, String } id of required membership
   * @param       q { optional, String } search query
   * @description get memberships either using id, search query or get all membership
   */
  async get(id?: string, q?: string): Promise<Membership[] | Membership> {
    if (id) {
      const membership: Membership = await Membership.findOne(id);
      if (!membership) {
        throw new NotFoundException('Requested membership does not exits');
      }

      deepRemove(membership, 'password');
      return membership;
    } else {
      const queryBuilder = Membership.createQueryBuilder();
      if (q) {
        const memberships: Membership[] = await queryBuilder
          .where('name LIKE :q', { q: `%${q}%` })
          .getMany();
        return memberships;
      } else {
        const memberships: Membership[] = await Membership.find();
        deepRemove(memberships, 'password');
        return memberships;
      }
    }
  }

  // create a membership
  async createMembership(
    dto: CreateMembershipDTO,
    member: Member,
  ): Promise<Membership> {
    const membership: Membership = Membership.create({
      ...dto,
      createdBy: member,
    });
    await membership.save();
    deepRemove(membership, 'password');
    return membership;
  }

  // update a membership
  async updateMembership(
    id: string,
    dto: UpdateMembershipDTO,
    member: Member,
  ): Promise<void> {
    const queryBuilder = Membership.createQueryBuilder();
    await queryBuilder
      .update()
      .set({ ...dto, updatedBy: member })
      .where('id = :id', { id })
      .execute();
  }

  // delete a membership
  async deleteMembership(id: string): Promise<boolean> {
    try {
      await Membership.delete(id);
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
