import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CenterModule } from './center/center.module';
import { SubscriberModule } from './subscriber/subscriber.module';
import { ResourceModule } from './resource/resource.module';
import { MembershipTypeModule } from './membership_type/membership_type.module';
import getOrmConfig from './orm.config';
import { MemberModule } from './member/member.module';
import { MembershipModule } from './membership/membership.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(getOrmConfig()),
    CenterModule,
    SubscriberModule,
    ResourceModule,
    MembershipTypeModule,
    MemberModule,
    MembershipModule,
    TransactionModule,
  ],
  providers: [],
})
export class AppModule {}
