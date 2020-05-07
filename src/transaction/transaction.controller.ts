import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Delete,
  Param,
  ValidationPipe,
  UsePipes,
  UseGuards,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import Transaction from './transaction.entity';
import { CreateTransactionDTO } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('transaction')
@UsePipes(ValidationPipe)
@UseGuards(AuthGuard())
export class TransactionController {
  constructor(private service: TransactionService) {}

  @Get('/:id')
  async getTransaction(
    @Param('id') id: string,
  ): Promise<Transaction | Transaction[]> {
    return this.service.get(id);
  }

  @Get()
  async get(
    @Query('id') id: string,
    @Query('q') q: string,
  ): Promise<Transaction | Transaction[]> {
    return this.service.get(id, q);
  }

  @Post()
  async createTransaction(
    @Body() dto: CreateTransactionDTO,
  ): Promise<Transaction> {
    return this.service.createTransaction(dto);
  }
}
