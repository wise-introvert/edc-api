import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { ResourceType } from '../model';

@Injectable()
export default class ResourceTypeValidatorPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toLowerCase();

    const valid: boolean = Object.values(ResourceType).includes(value);

    if (!valid) {
      throw new BadRequestException(
        `Invalid resource type ${value} provided.\nExpected one of ${Object.values(
          ResourceType,
        )}`,
      );
    }

    return value;
  }
}
