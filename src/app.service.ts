import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger('APP_SERVICE_LOG');
  getHello(): string {
    return 'Hello World!';
  }

  save(params: string): string {
    this.logger.log('调用save方法');
    return `sava ! ${params}`;
  }
}
