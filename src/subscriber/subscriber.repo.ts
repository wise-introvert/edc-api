import { Repository, EntityRepository } from 'typeorm';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import Subscriber from './subscriber.entity';
import { CreateSubscriberDTO, UpdateSubscriberDTO } from './dto';
import Member from 'src/member/member.entity';
import { deepRemove } from 'src/common';

@EntityRepository(Subscriber)
export default class SubscriberRepo extends Repository<Subscriber> {
  /**
   * @param       id { optional, String } id of required subscriber
   * @param       q { optional, String } search query
   * @description get subscribers either using id, search query or get all subscriber
   */
  async get(id?: string, q?: string): Promise<Subscriber | Subscriber[]> {
    const queryBuilder = Subscriber.createQueryBuilder('subscriber');
    if (id) {
      queryBuilder.where('id = :id', { id });
    }
    if (q) {
      queryBuilder.orWhere(
        `concat_ws(" ", firstName, lastName, middleName, fatherName, motherName, school) like :q`,
        { q: `%${q}%` },
      );
    }

    const subscribers: Subscriber[] = await queryBuilder
      .leftJoinAndSelect('subscriber.center', 'center')
      .leftJoinAndSelect('subscriber.createdBy', 'createdBy')
      .leftJoinAndSelect('subscriber.updatedBy', 'updatedBy')
      .getMany();
    deepRemove(subscribers);
    return subscribers;
  }

  async createSubscriber(
    dto: CreateSubscriberDTO,
    member: Member,
  ): Promise<Subscriber> {
    const subscriber: Subscriber = Subscriber.create({
      ...dto,
      createdBy: member,
    });
    await subscriber.save();
    deepRemove(subscriber);
    return subscriber;
  }

  async updateSubscriber(
    id: string,
    dto: UpdateSubscriberDTO,
    member: Member,
  ): Promise<void> {
    await Subscriber.update(
      {
        id,
      },
      {
        ...dto,
        updatedBy: member,
      },
    );
  }

  async deleteSubscriber(id: string): Promise<boolean> {
    try {
      await Subscriber.delete({ id });
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
