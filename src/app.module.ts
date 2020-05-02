import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import * as path from 'path';

import { CenterModule } from './center/center.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'edc',
      synchronize: true,
      logging: false,
      entities: [
        path.join(__dirname, '../dist/**/**.entity{.ts,.js}'),
        path.join(__dirname, './**/**.entity{.ts,.js}'),
      ],
    }),
    CenterModule,
  ],
})
export class AppModule {}
