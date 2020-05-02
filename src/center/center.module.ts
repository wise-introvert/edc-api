import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CenterService } from './center.service';
import { CenterController } from './center.controller';
import CenterRepo from './center.repo';

@Module({
  imports: [TypeOrmModule.forFeature([CenterRepo])],
  providers: [CenterService],
  controllers: [CenterController],
})
export class CenterModule {}
