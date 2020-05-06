import { Injectable } from '@nestjs/common';
import SubscriberRepo from './subscriber.repo';
import Subscriber from './subscriber.entity';
import { CreateSubscriberDTO, UpdateSubscriberDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import Member from 'src/member/member.entity';

@Injectable()
export class SubscriberService {
  constructor(@InjectRepository(SubscriberRepo) private repo: SubscriberRepo) {}

  async get(id?: string, q?: string): Promise<Subscriber | Subscriber[]> {
    return this.repo.get(id, q);
  }

  async createSubscriber(
    dto: CreateSubscriberDTO,
    member: Member,
  ): Promise<Subscriber> {
    return this.repo.createSubscriber(dto, member);
  }

  async updateSubscriber(
    id: string,
    dto: UpdateSubscriberDTO,
    member: Member,
  ): Promise<void> {
    return this.repo.updateSubscriber(id, dto, member);
  }

  async deleteSubscriber(id: string): Promise<boolean> {
    return this.repo.deleteSubscriber(id);
  }
}
