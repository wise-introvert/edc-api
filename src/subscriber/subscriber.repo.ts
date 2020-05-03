import { Repository, EntityRepository } from 'typeorm';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import Subscriber from './subscriber.entity';
import { CreateSubscriberDTO, UpdateSubscriberDTO } from './dto';
import Center from 'src/center/center.entity';

@EntityRepository(Subscriber)
export default class SubscriberRepo extends Repository<Subscriber> {
  /**
   * @param       id { optional, String } id of required subscriber
   * @param       q { optional, String } search query
   * @description get subscribers either using id, search query or get all subscriber
   */
  async get(id?: string, q?: string): Promise<Subscriber | Subscriber[]> {
    if (id) {
      const subscriber: Subscriber = await Subscriber.findOne(id, {
        relations: ['center'],
      });
      if (!subscriber) {
        throw new NotFoundException(`Requested subcriber does not exist`);
      }
      return subscriber;
    } else {
      const queryBuilder = Subscriber.createQueryBuilder('subscriber');
      if (q) {
        const subscribers: Subscriber[] = await queryBuilder
          .leftJoinAndSelect('subscriber.center', 'center')
          .where('firstName LIKE :q', { q: `%${q}%` })
          .orWhere('middleName LIKE :q', { q: `%${q}%` })
          .orWhere('lastName LIKE :q', { q: `%${q}%` })
          .orWhere('displayId LIKE :q', { q: `%${q}%` })
          .orWhere('centerId LIKE :q', { q: `%${q}%` })
          .getMany();
        return subscribers;
      } else {
        const subscribers: Subscriber[] = await Subscriber.find();
        return subscribers;
      }
    }
  }

  async createSubscriber(dto: CreateSubscriberDTO): Promise<Subscriber> {
    const subscriber: Subscriber = Subscriber.create({
      ...dto,
    });
    await subscriber.save();
    return subscriber;
  }

  async updateSubscriber(id: string, dto: UpdateSubscriberDTO): Promise<void> {
    await Subscriber.update(
      {
        id,
      },
      {
        ...dto,
      },
    );
  }

  async deleteSubscriber(id: string): Promise<Boolean> {
    try {
      await Subscriber.delete({ id });
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}