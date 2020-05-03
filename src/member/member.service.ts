import { Injectable } from '@nestjs/common';
import MemberRepo from './member.repo';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDTO, LoginDTO } from './dto';
import { RegisterResponse } from './model';
import UpdateMemberDTO from './dto/update.dto';

@Injectable()
export class MemberService {
  constructor(@InjectRepository(MemberRepo) private repo: MemberRepo) {}

  async register(dto: RegisterDTO): Promise<RegisterResponse> {
    return this.repo.register(dto);
  }

  async login(dto: LoginDTO): Promise<boolean> {
    return this.repo.login(dto);
  }

  async update(id: string, dto: UpdateMemberDTO): Promise<boolean> {
    return this.repo.updateMember(id, dto);
  }
}
