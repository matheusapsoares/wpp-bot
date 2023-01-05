import { DataSource } from 'typeorm';
import { Microphones } from './entities/microphones.entity';

export const MicrophonesProviders = [
  {
    provide: 'MICROPHONES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Microphones),
    inject: ['DATA_SOURCE'],
  },
];