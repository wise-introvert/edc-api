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
import { MembershipTypeService } from './membership_type.service';
import MembershipType from './membership_type.entity';
import { CreateMembershipTypeDTO, UpdateMembershipTypeDTO } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('membership_type')
@UsePipes(ValidationPipe)
@UseGuards(AuthGuard())
export class MembershipTypeController {
  constructor(private service: MembershipTypeService) {}

  @Get('/:id')
  async getMembershipType(
    @Param('id') id: string,
  ): Promise<MembershipType | MembershipType[]> {
    return this.service.get(id);
  }

  @Get()
  async get(
    @Query('id') id: string,
    @Query('q') q: string,
  ): Promise<MembershipType | MembershipType[]> {
    return this.service.get(id, q);
  }

  @Post()
  async createMembershipType(
    @Body() dto: CreateMembershipTypeDTO,
  ): Promise<MembershipType> {
    return this.service.createMembershipType(dto);
  }

  @Patch('/:id')
  async updateMembershipType(
    @Param('id') id: string,
    @Body() dto: UpdateMembershipTypeDTO,
  ): Promise<void> {
    return this.service.updateMembershipType(id, dto);
  }

  @Delete('/:id')
  async deleteMembershipType(@Param('id') id: string): Promise<boolean> {
    return this.service.deleteMembershipType(id);
  }
}
