import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MicrophonesController } from '../controllers/microphones.controller';
import { MicrophonesProviders } from '../providers/microphones.providers';
import { MicrophonesService } from '../services/microphones.service';

@Module({
  imports:[DatabaseModule],
  controllers: [MicrophonesController],
  providers: [MicrophonesService, ...MicrophonesProviders]
})
export class MicrophonesModule {}
