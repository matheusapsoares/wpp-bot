import { Module } from '@nestjs/common';
import { IndicatorsService } from '../services/indicators.service';
import { IndicatorsController } from '../controllers/indicators.controller';
import { IndicatorsProviders } from '../providers/indicators.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [IndicatorsController],
  providers: [IndicatorsService, ...IndicatorsProviders]
})
export class IndicatorsModule {}
