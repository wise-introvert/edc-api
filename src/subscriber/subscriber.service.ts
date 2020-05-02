import { Injectable } from '@nestjs/common';
import SubscriberRepo from './subscriber.repo';
import Subscriber from './subscriber.entity';
import { CreateSubscriberDTO, UpdateSubscriberDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubscriberService {
  constructor(@InjectRepository(SubscriberRepo) private repo: SubscriberRepo) {}

  async get(id?: string, q?: string): Promise<Subscriber | Subscriber[]> {
    return this.repo.get(id, q);
  }

  async createSubscriber(dto: CreateSubscriberDTO): Promise<Subscriber> {
    return this.repo.createSubscriber(dto);
  }

  async updateSubscriber(id: string, dto: UpdateSubscriberDTO): Promise<void> {
    return this.repo.updateSubscriber(id, dto);
  }

  async deleteSubscriber(id: string): Promise<Boolean> {
    return this.repo.deleteSubscriber(id);
  }
}
