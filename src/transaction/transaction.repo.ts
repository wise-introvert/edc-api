import { Repository, EntityRepository } from 'typeorm';
import {
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import Transaction from './transaction.entity';
import { CreateTransactionDTO } from './dto';

@EntityRepository(Transaction)
export default class TransactionRepo extends Repository<Transaction> {
  /**
   * @param       id { optional, String } id of required transaction
   * @param       q { optional, String } search query
   * @description get transactions either using id, search query or get all transaction
   */
  async get(id?: string, q?: string): Promise<Transaction | Transaction[]> {
    const queryBuilder = Transaction.createQueryBuilder('transaction');
    if (id) {
      const transaction: Transaction = await Transaction.findOne(id);
      if (!transaction) {
        throw new NotFoundException(`Requested transaction does not exist`);
      }
      return transaction;
    } else {
      if (q) {
        const transactions: Transaction[] = await queryBuilder
          .leftJoinAndSelect('transaction.resource', 'resource')
          .leftJoinAndSelect('transaction.subscriber', 'subscriber')
          .where('resource.displayId LIKE :q', { q: `%${q}%` })
          .orWhere('resource.name LIKE :q', { q: `%${q}%` })
          .orWhere('subscriber.displayId LIKE :q', { q: `%${q}%` })
          .orWhere('subscriber.name LIKE :q', { q: `%${q}%` })
          .orWhere('type LIKE :q', { q: `%${q}%` })
          .getMany();
        return transactions;
      } else {
        const transactions: Transaction[] = await queryBuilder.getMany();
        return transactions;
      }
    }
  }

  async createTransaction(dto: CreateTransactionDTO): Promise<Transaction> {
    const transaction: Transaction = Transaction.create({
      ...dto,
    });
    await transaction.save();
    return transaction;
  }
}
