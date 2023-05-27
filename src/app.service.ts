import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  save(params: string): string {
    return `sava ! ${params}`;
  }
}
