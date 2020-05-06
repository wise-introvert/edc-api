import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { ResourceType } from '../model';

@Injectable()
export default class ResourceTypeValidatorPipe implements PipeTransform {
  transform(v: any, metadata: ArgumentMetadata) {
    let value: string = v.type;

    const valid: boolean = Object.values(ResourceType).includes(
      value as ResourceType,
    );

    if (!valid) {
      throw new BadRequestException(
        `Invalid resource type ${value} provided.\nExpected one of ${Object.values(
          ResourceType,
        )}`,
      );
    }

    return v;
  }
}
