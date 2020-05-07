import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import Member from '../../member/member.entity';

const ExtractMember = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Partial<Member> => {
    const request = ctx.switchToHttp().getRequest();
    const member: Member = request.user;

    delete member.password;
    return member;
  },
);

export default ExtractMember;
