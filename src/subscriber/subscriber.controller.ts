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
} from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import Subscriber from './subscriber.entity';
import { CreateSubscriberDTO, UpdateSubscriberDTO } from './dto';

@Controller('subscriber')
@UsePipes(ValidationPipe)
export class SubscriberController {
  constructor(private service: SubscriberService) {}

  @Get('/:id')
  async getSubscriber(
    @Param('id') id: string,
  ): Promise<Subscriber | Subscriber[]> {
    return this.service.get(id);
  }

  @Get()
  async get(
    @Query('id') id: string,
    @Query('q') q: string,
  ): Promise<Subscriber | Subscriber[]> {
    return this.service.get(id, q);
  }

  @Post()
  async createSubscriber(
    @Body() dto: CreateSubscriberDTO,
  ): Promise<Subscriber> {
    return this.service.createSubscriber(dto);
  }

  @Patch('/:id')
  async updateSubscriber(
    @Param('id') id: string,
    @Body() dto: UpdateSubscriberDTO,
  ): Promise<void> {
    return this.service.updateSubscriber(id, dto);
  }

  @Delete('/:id')
  async deleteSubscriber(@Param('id') id: string): Promise<Boolean> {
    return this.service.deleteSubscriber(id);
  }
}
