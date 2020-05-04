import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import ResourceRepo from './resource.repo';
import { MemberModule } from 'src/member/member.module';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceRepo]), MemberModule],
  providers: [ResourceService],
  controllers: [ResourceController],
})
export class ResourceModule {}
