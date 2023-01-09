import { Injectable, Inject } from '@nestjs/common';
import { Persons } from 'src/entities/persons.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PersonsService {
  constructor(
    @Inject('PERSONS_REPOSITORY')
    private personsRepository: Repository<Persons>,
  ) {}

  async findAll(): Promise<Persons[]> {
    return this.personsRepository.find();
  }

  async findByPosition(position:string): Promise<Persons> {
    return this.personsRepository.findOne({
        where:{
            position: position
        }
    })
  }
}