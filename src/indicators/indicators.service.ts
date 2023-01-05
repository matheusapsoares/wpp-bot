import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Indicators } from './entities/indicators.entity';


@Injectable()
export class IndicatorsService {
  constructor(
    @Inject('INDICATORS_REPOSITORY')
    private indicatorRepository: Repository<Indicators>,
  ) {}

  async findAll(): Promise<Indicators[]> {
    return this.indicatorRepository.find();
  }

  async findByDate(date: string):  Promise<Indicators[]> {
    return this.indicatorRepository.find({
      where: {
        date: date,
        send: false
      }
    });
  }

  async update(id: number, indicatorData: Indicators):  Promise<Indicators> {
    const indicador = await this.indicatorRepository.findOneBy({
      id: id,
    });

    if(indicador) {
      this.indicatorRepository.save(indicatorData);
      return this.indicatorRepository.findOneBy({
        id: id,
      });
    }
  }

}