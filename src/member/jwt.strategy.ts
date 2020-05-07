import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import MemberRepo from './member.repo';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Payload } from './model';
import Member from './member.entity';

const secret: string = process.env.SECRET || 'BA41EE2855D5765C4845B9FB4F22F';

@Injectable()
export default class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectRepository(MemberRepo) private repo: MemberRepo) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret,
    });
  }

  async validate(payload: Payload): Promise<Member> {
    const { id } = payload;
    const member: Member = await this.repo.findOne(id);

    if (!member || !member.active) {
      throw new UnauthorizedException();
    }

    return member;
  }
}
