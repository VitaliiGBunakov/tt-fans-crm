import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UtilitiesService {
  constructor(private config: ConfigService) {}

  async hashString(str: string) {
    const saltOrRounds = +this.config.get('SALT');
    console.log(`saltOrRounds:` + saltOrRounds);
    return await bcrypt.hash(str, saltOrRounds);
  }

  async compareStringToHash(str: string, hashed: string) {
    return bcrypt.compare(str, hashed);
  }
}
