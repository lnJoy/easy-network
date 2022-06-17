import { Module } from '@nestjs/common';
import { SubnetModule } from 'subnet/subnet.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SubnetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
