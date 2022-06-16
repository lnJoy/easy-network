import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSubnetDto } from './dto/create-subnet.dto';
import { VLSM } from './models/vlsm.model';
import { VLSMService } from './vlsm.service';

@Controller('vlsm')
export class VLSMController {
  constructor(private readonly vlsmService: VLSMService) {}

  @Post()
  async create(@Body() createSubnetDto: CreateSubnetDto): Promise<VLSM[]> {
    return this.vlsmService.compute(createSubnetDto);
  }
}