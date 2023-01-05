import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MicrophonesController } from './microphones.controller';
import { MicrophonesProviders } from './microphones.providers';
import { MicrophonesService } from './microphones.service';

@Module({
  imports:[DatabaseModule],
  controllers: [MicrophonesController],
  providers: [MicrophonesService, ...MicrophonesProviders]
})
export class MicrophonesModule {}
