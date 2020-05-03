import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import * as path from 'path';

import { CenterModule } from './center/center.module';
import { SubscriberModule } from './subscriber/subscriber.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql129.main-hosting.eu',
      port: 3306,
      username: 'u309678516_rfcetl',
      password: 'Nostalgia@2k18',
      database: 'u309678516_rfcetl',
      synchronize: true,
      logging: false,
      entities: [
        path.join(__dirname, '../dist/**/**.entity{.ts,.js}'),
        path.join(__dirname, './**/**.entity{.ts,.js}'),
      ],
    }),
    CenterModule,
    SubscriberModule,
  ],
})
export class AppModule {}
