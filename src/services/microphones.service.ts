import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Microphones } from '../entities/microphones.entity';


@Injectable()
export class MicrophonesService {
  constructor(
    @Inject('MICROPHONES_REPOSITORY')
    private microphoneRepository: Repository<Microphones>,
  ) {}

  async findAll(): Promise<Microphones[]> {
    return this.microphoneRepository.find();
  }

  async findByDate(date: string, send: boolean):  Promise<Microphones[]> {
    return this.microphoneRepository.find({
      where: {
        date: date,
        send: send
      }
    });
  }

  async update(id: number, microphoneData: Microphones):  Promise<Microphones> {
    const indicador = await this.microphoneRepository.findOneBy({
      id: id,
    });

    if(indicador) {
      this.microphoneRepository.save(microphoneData);
      return this.microphoneRepository.findOneBy({
        id: id,
      });
    }
  }

}