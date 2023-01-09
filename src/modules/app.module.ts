import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TaskSenderMicrophones } from '../crons/task-sender-microphones.cron';
import { TaskSenderIndicators } from '../crons/task-sender-indicators.cron';
import { DatabaseModule } from '../database/database.module';
import { IndicatorsModule } from './indicators.module';
import { IndicatorsProviders } from '../providers/indicators.providers';
import { IndicatorsService } from '../services/indicators.service';
import { MicrophonesModule } from './microphones.module';
import { MicrophonesProviders } from '../providers/microphones.providers';
import { MicrophonesService } from '../services/microphones.service';
import { WppClientService } from '../services/WppClient.service';
import { PersonsModule } from './persons.module';
import { PersonsService } from 'src/services/persons.service';
import { PersonsProviders } from 'src/providers/persons.providers';
import { TaskSenderNotifications } from 'src/crons/task-sender-notifications.cron';

@Module({
  imports: [
    DatabaseModule,
    ScheduleModule.forRoot(),
    IndicatorsModule,
    MicrophonesModule,
    PersonsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TaskSenderIndicators,
    TaskSenderMicrophones,
    TaskSenderNotifications, 
    IndicatorsService,
    MicrophonesService,
    PersonsService,
    ...IndicatorsProviders,
    ...MicrophonesProviders, 
    ...PersonsProviders, 
    WppClientService
  ],
})
export class AppModule {}
