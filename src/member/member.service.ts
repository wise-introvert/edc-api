import { Injectable } from '@nestjs/common';
import MemberRepo from './member.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDTO, LoginDTO } from './dto';
import { RegisterResponse, LoginResponse, Payload } from './model';
import UpdateMemberDTO from './dto/update.dto';
import Member from './member.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(MemberRepo) private repo: MemberRepo,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDTO): Promise<RegisterResponse> {
    return this.repo.register(dto);
  }

  async login(dto: LoginDTO): Promise<LoginResponse> {
    const member: Member = await this.repo.login(dto);

    const payload: Payload = {
      id: member.id,
    };

    const authToken = await this.jwtService.signAsync(payload);

    return {
      authToken,
    };
  }

  async update(id: string, dto: UpdateMemberDTO): Promise<boolean> {
    return this.repo.updateMember(id, dto);
  }
}
