import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import SubscriberRepo from './subscriber.repo';
import { MemberModule } from 'src/member/member.module';

@Module({
  imports: [TypeOrmModule.forFeature([SubscriberRepo]), MemberModule],
  providers: [SubscriberService],
  controllers: [SubscriberController],
})
export class SubscriberModule {}
