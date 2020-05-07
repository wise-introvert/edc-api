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
import { MembershipService } from './membership.service';
import Membership from './membership.entity';
import { CreateMembershipDTO, UpdateMembershipDTO } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { ExtractMember } from 'src/common';
import Member from 'src/member/member.entity';
import { DurationValidatorPipe } from './pipes';

@Controller('membership')
@UsePipes(ValidationPipe)
@UseGuards(AuthGuard())
export class MembershipController {
  constructor(private service: MembershipService) {}

  @Get('/:id')
  async getMembership(
    @Param('id') id: string,
  ): Promise<Membership | Membership[]> {
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
  async createMembership(
    @Body(DurationValidatorPipe) dto: CreateMembershipDTO,
    @ExtractMember() member: Member,
  ): Promise<Membership> {
    return this.service.createMembership(dto, member);
  }

  @Patch('/:id')
  async updateMembership(
    @Param('id') id: string,
    @Body(DurationValidatorPipe) dto: UpdateMembershipDTO,
    @ExtractMember() member: Member,
  ): Promise<void> {
    return this.service.updateMembership(id, dto, member);
  }

  @Delete('/:id')
  async deleteMembership(@Param('id') id: string): Promise<boolean> {
    return this.service.deleteMembership(id);
  }
}
