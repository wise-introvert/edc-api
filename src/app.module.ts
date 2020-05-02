import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot(require("../ormconfig.json")),
  ],
})
export class AppModule {}
