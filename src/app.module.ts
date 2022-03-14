import { Module } from '@nestjs/common';
import { ConfigurationModule } from './config.module';
import { ShutdownModule } from './shutdown/shutdown.module';

@Module({
  imports: [ConfigurationModule, ShutdownModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
