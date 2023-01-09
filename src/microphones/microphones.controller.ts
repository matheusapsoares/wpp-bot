import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WppClientService } from 'src/WppClient.service';
import { MicrophonesService } from './microphones.service';

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
