import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskSenderMicrophones } from './crons/task-sender-microphones.cron';
import { TaskSenderIndicators } from './crons/task-sender-indicators.cron';
import { DatabaseModule } from './database/database.module';
import { IndicatorsModule } from './indicators/indicators.module';
import { IndicatorsProviders } from './indicators/indicators.providers';
import { IndicatorsService } from './indicators/indicators.service';
import { MicrophonesModule } from './microphones/microphones.module';
import { MicrophonesProviders } from './microphones/microphones.providers';
import { MicrophonesService } from './microphones/microphones.service';
import { WppClientService } from './WppClient.service';

@Module({
  imports: [
    DatabaseModule,
    IndicatorsModule,
    ScheduleModule.forRoot(),
    MicrophonesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TaskSenderIndicators,
    TaskSenderMicrophones, 
    IndicatorsService,
    MicrophonesService,
    ...IndicatorsProviders,
    ...MicrophonesProviders, 
    WppClientService
  ],
})
export class AppModule {}