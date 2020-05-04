import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import TransactionRepo from './transaction.repo';
import { MemberModule } from 'src/member/member.module';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionRepo]), MemberModule],
  providers: [TransactionService],
  controllers: [TransactionController],
})
export class TransactionModule {}
