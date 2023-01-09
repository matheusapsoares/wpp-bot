import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { WppClientService } from 'src/WppClient.service';

@Controller('indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {
    //const clientWpp = new WppClientService
  }

  @Get()
  findAll() {
    return this.indicatorsService.findAll();
  }
}
