import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import ResourceRepo from './resource.repo';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceRepo])],
  providers: [ResourceService],
  controllers: [ResourceController],
})
export class ResourceModule {}
