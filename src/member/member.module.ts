import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import MemberRepo from './member.repo';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';

@Module({
  imports: [TypeOrmModule.forFeature([MemberRepo])],
  controllers: [MemberController],
  providers: [MemberService] 
})
export class MemberModule {}
