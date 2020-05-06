import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { ValidMembershipTypes } from '../model';

@Injectable()
export default class MembershipTypeValidatorPipe implements PipeTransform {
  transform(v: any, metadata: ArgumentMetadata) {
    let value: string = v.type.replace(' ', '');

    const valid: boolean = Object.values(ValidMembershipTypes).includes(
      value as ValidMembershipTypes,
    );

    if (!valid) {
      throw new BadRequestException(
        `Invalid resource type ${value} provided.\nExpected one of ${Object.values(
          ValidMembershipTypes,
        )}`,
      );
    }

    return v;
  }
}
