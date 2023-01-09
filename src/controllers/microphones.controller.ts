import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WppClientService } from 'src/services/WppClient.service';
import { MicrophonesService } from '../services/microphones.service';

@Controller('microphones')
export class MicrophonesController {
  constructor(private readonly microphoneService: MicrophonesService) {
    //const clientWpp = new WppClientService
  }

  @Get()
  findAll() {
    return this.microphoneService.findAll();
  }
}
