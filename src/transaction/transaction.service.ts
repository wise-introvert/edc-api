import { Injectable } from '@nestjs/common';
import TransactionRepo from './transaction.repo';
import Transaction from './transaction.entity';
import { CreateTransactionDTO } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionRepo) private repo: TransactionRepo,
  ) {}

  async get(id?: string, q?: string): Promise<Transaction | Transaction[]> {
    return this.repo.get(id, q);
  }

  async createTransaction(dto: CreateTransactionDTO): Promise<Transaction> {
    return this.repo.createTransaction(dto);
  }
}
