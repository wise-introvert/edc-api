import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CenterModule } from './center/center.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(require("../ormconfig.json")),
    CenterModule,
  ],
})
export class AppModule {}
