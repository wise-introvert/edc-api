import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CenterModule } from './center/center.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import getOrmConfig from './orm.config';
import { ErrorFilter } from './common';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forRoot(getOrmConfig()),
    CenterModule,
    SubscriberModule,
  ],
  providers: [{ provide: APP_FILTER, useClass: ErrorFilter }],
})
export class AppModule {}
