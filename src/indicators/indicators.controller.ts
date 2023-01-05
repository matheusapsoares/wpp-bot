import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IndicatorsService } from './indicators.service';
import { CreateIndicatorDto } from './dto/create-indicator.dto';
import { UpdateIndicatorDto } from './dto/update-indicator.dto';
import { WppClientService } from 'src/WppClient.service';

@Controller('indicators')
export class IndicatorsController {
  constructor(private readonly indicatorsService: IndicatorsService) {
    //const clientWpp = new WppClientService
  }

  @Post('sender')
  create(@Body() createIndicatorDto: CreateIndicatorDto) {
    
    //return this.indicatorsService.create(createIndicatorDto);
  }

  @Get()
  findAll() {
    return this.indicatorsService.findAll();
  }
}
