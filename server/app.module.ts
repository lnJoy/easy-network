import { Module } from '@nestjs/common';
import { VLSMModule } from 'vlsm/vlsm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [VLSMModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
