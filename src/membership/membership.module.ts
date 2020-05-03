import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MembershipService } from './membership.service';
import { MembershipController } from './membership.controller';
import MembershipRepo from './membership.repo';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipRepo])],
  providers: [MembershipService],
  controllers: [MembershipController],
})
export class MembershipModule {}
