import { Controller, Post } from '@nestjs/common';
import { ShutdownService } from './shutdown.service';

@Controller('shutdown')
export class ShutdownController {
  constructor(private readonly shutdownService: ShutdownService) {}

  @Post('/')
  shutdown() {
    const result = this.shutdownService.shutdown();

    return result;
  }
}
