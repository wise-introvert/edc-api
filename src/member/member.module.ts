import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import MemberRepo from './member.repo';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import JwtStrategy from './jwt.strategy';

const secret: string = process.env.SECRET || 'BA41EE2855D5765C4845B9FB4F22F';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret,
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([MemberRepo]),
  ],
  controllers: [MemberController],
  providers: [MemberService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class MemberModule {}
