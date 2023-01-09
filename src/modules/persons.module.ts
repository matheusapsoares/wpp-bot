import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PersonsProviders } from 'src/providers/persons.providers';
import { PersonsService } from 'src/services/persons.service';

@Module({
  imports:[DatabaseModule],
  controllers: [],
  providers: [PersonsService, ...PersonsProviders]
})
export class PersonsModule {}
