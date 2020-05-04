import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { RegisterDTO, LoginDTO, UpdateDTO } from './dto';
import { RegisterResponse, LoginResponse } from './model';

@Controller('member')
@UsePipes(ValidationPipe)
export class MemberController {
  constructor(private service: MemberService) {}

  @Post('/register')
  async register(@Body() dto: RegisterDTO): Promise<RegisterResponse> {
    return this.service.register(dto);
  }

  @Post('/login')
  async login(@Body() dto: LoginDTO): Promise<LoginResponse> {
    return this.service.login(dto);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateDTO,
  ): Promise<boolean> {
    return this.service.update(id, dto);
  }
}
