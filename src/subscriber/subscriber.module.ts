import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import SubscriberRepo from './subscriber.repo';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriberRepo])],
  providers: [SubscriberService],
  controllers: [SubscriberController],
})
export class SubscriberModule {}
