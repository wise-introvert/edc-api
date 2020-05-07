import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { Duration } from '../model';

@Injectable()
export default class DurationValidatorPipe implements PipeTransform {
  transform(v: any, metadata: ArgumentMetadata) {
    let value: string = v.duration.toUpperCase();

    const valid: boolean = Object.values(Duration).includes(value as Duration);

    if (!valid) {
      throw new BadRequestException(
        `Invalid duartion ${value} provided.\nExpected one of ${Object.values(
          Duration,
        )}`,
      );
    }

    return v;
  }
}
