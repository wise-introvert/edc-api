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
  UseGuards,
} from '@nestjs/common';
import { ResourceService } from './resource.service';
import Resource from './resource.entity';
import { CreateResourceDTO, UpdateResourceDTO } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { ResourceTypeValidatorPipe } from './pipes';
import { ExtractMember } from 'src/common';
import Member from 'src/member/member.entity';

@Controller('resource')
@UsePipes(ValidationPipe)
@UseGuards(AuthGuard())
export class ResourceController {
  constructor(private service: ResourceService) {}

  @Get('/:id')
  async getResource(@Param('id') id: string): Promise<Resource | Resource[]> {
    return this.service.get(id);
  }

  @Get()
  async get(
    @Query('id') id: string,
    @Query('q') q: string,
  ): Promise<Resource | Resource[]> {
    return this.service.get(id, q);
  }

  @Post()
  async createResource(
    @Body(ResourceTypeValidatorPipe) dto: CreateResourceDTO,
    @ExtractMember() member: Member,
  ): Promise<Resource> {
    return this.service.createResource(dto, member);
  }

  @Patch('/:id')
  async updateResource(
    @Param('id') id: string,
    @Body() dto: UpdateResourceDTO,
    @ExtractMember() member: Member,
  ): Promise<void> {
    return this.service.updateResource(id, dto, member);
  }

  @Delete('/:id')
  async deleteResource(@Param('id') id: string): Promise<boolean> {
    return this.service.deleteResource(id);
  }
}
