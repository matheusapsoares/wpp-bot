import { Module } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { IndicatorsController } from './indicators.controller';
import { IndicatorsProviders } from './indicators.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule],
  controllers: [IndicatorsController],
  providers: [IndicatorsService, ...IndicatorsProviders]
})
export class IndicatorsModule {}
