import { DataSource } from 'typeorm';
import { Indicators } from './entities/indicators.entity';

export const IndicatorsProviders = [
  {
    provide: 'INDICATORS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Indicators),
    inject: ['DATA_SOURCE'],
  },
];