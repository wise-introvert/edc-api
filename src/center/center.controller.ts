import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Query,
  Delete,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CenterService } from './center.service';
import Center from './center.entity';
import { CreateCenterDTO, UpdateCenterDTO } from './dto';

@Controller('center')
@UsePipes(ValidationPipe)
export class CenterController {
  constructor(private service: CenterService) {}

  @Get('/:id')
  async getCenter(@Param('id') id: string): Promise<Center | Center[]> {
    return this.service.get(id);
  }

  @Get()
  async get(
    @Query('id') id: string,
    @Query('q') q: string,
  ): Promise<Center | Center[]> {
    return this.service.get(id, q);
  }

  @Post()
  async createCenter(@Body() dto: CreateCenterDTO): Promise<Center> {
    return this.service.createCenter(dto);
  }

  @Patch('/:id')
  async updateCenter(
    @Param('id') id: string,
    @Body() dto: UpdateCenterDTO,
  ): Promise<void> {
    return this.service.updateCenter(id, dto);
  }

  @Delete('/:id')
  async deleteCenter(@Param('id') id: string): Promise<Boolean> {
    return this.service.deleteCenter(id);
  }
}
