import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MembershipTypeService } from './membership_type.service';
import { MembershipTypeController } from './membership_type.controller';
import MembershipTypeRepo from './membership_type.repo';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipTypeRepo])],
  providers: [MembershipTypeService],
  controllers: [MembershipTypeController],
})
export class MembershipTypeModule {}
