import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ShutdownService } from './shutdown.service';

@Controller('shutdown')
export class ShutdownController {
  constructor(
    private readonly shutdownService: ShutdownService,
    private readonly config: ConfigService,
  ) {}

  @Post('/')
  shutdown(@Body('secret') secret: string) {
    if (secret !== this.config.get('SECRET')) return '잘못된 인증 키 입니다.';
    const result = this.shutdownService.shutdown();

    return result;
  }
}
