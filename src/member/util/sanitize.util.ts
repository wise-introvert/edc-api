import * as _ from 'lodash';
import { Logger } from '@nestjs/common';

export default function sanitize(obj: any, germs: string | string[]): any {
  germs = typeof germs === 'string' ? [germs] : germs;

  germs.forEach((germ: string) => {
    delete obj[germ];
  });

  Logger.log('sanitized object: ' + obj, 'sanitize()');

  return obj;
}
