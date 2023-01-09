import { Persons } from 'src/entities/persons.entity';
import { DataSource } from 'typeorm';

export const PersonsProviders = [
  {
    provide: 'PERSONS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Persons),
    inject: ['DATA_SOURCE'],
  },
];