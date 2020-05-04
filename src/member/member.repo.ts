import { Repository, EntityRepository } from 'typeorm';
import Member from './member.entity';
import { RegisterDTO, LoginDTO } from './dto';
import {
  NotFoundException,
  UnauthorizedException,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { compare } from './util';
import { RegisterResponse, Payload, LoginResponse } from './model';
import UpdateMemberDTO from './dto/update.dto';

@EntityRepository(Member)
export default class MemberRepo extends Repository<Member> {
  async register(dto: RegisterDTO): Promise<RegisterResponse> {
    const existing: Member = await Member.findOne({
      where: { username: dto.username },
    });
    if (existing) {
      throw new ConflictException(`Account already exists`);
    }
    const member: Member = Member.create({ ...dto });
    await member.save();
    return {
      message: 'Account successfully created',
      id: member.id,
    };
  }

  async login(dto: LoginDTO): Promise<Member> {
    const member: Member = await Member.findOne({
      where: { username: dto.username },
    });
    if (!member) {
      throw new NotFoundException(`Account does not exist`);
    }

    const valid: boolean = await compare(dto.password, member.password);
    if (!valid) {
      throw new UnauthorizedException(`Invalid username/password`);
    }

    return member;
  }

  async updateMember(id: string, dto: UpdateMemberDTO): Promise<boolean> {
    try {
      await Member.update({ id }, { ...dto });
      return true;
    } catch (err) {
      throw new InternalServerErrorException(err.message);
    }
  }
}
