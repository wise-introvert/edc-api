import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import * as path from 'path';

import { CenterModule } from './center/center.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import getOrmConfig from './orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(getOrmConfig()),
    CenterModule,
    SubscriberModule,
  ],
})
export class AppModule {}
