import { Module } from '@nestjs/common';
import { ShutdownController } from './shutdown.controller';
import { ShutdownService } from './shutdown.service';

@Module({
  imports: [],
  controllers: [ShutdownController],
  providers: [ShutdownService],
})
export class ShutdownModule {}
