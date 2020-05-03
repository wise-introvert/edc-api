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
import { MembershipService } from './membership.service';
import Membership from './membership.entity';
import { CreateMembershipDTO, UpdateMembershipDTO } from './dto';

@Controller('membership')
@UsePipes(ValidationPipe)
export class MembershipController {
  constructor(private service: MembershipService) {}

  @Get('/:id')
  async getMembership(@Param('id') id: string): Promise<Membership | Membership[]> {
    return this.service.get(id);
  }

  @Get()
  async get(
    @Query('id') id: string,
    @Query('q') q: string,
  ): Promise<Membership | Membership[]> {
    return this.service.get(id, q);
  }

  @Post()
  async createMembership(@Body() dto: CreateMembershipDTO): Promise<Membership> {
    return this.service.createMembership(dto);
  }

  @Patch('/:id')
  async updateMembership(
    @Param('id') id: string,
    @Body() dto: UpdateMembershipDTO,
  ): Promise<void> {
    return this.service.updateMembership(id, dto);
  }

  @Delete('/:id')
  async deleteMembership(@Param('id') id: string): Promise<boolean> {
    return this.service.deleteMembership(id);
  }
}
