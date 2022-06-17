import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateSubnetDto } from './dto/create-subnet.dto';
import { ResultSubnet } from './models/subnet.model';
import { SubnetService } from './subnet.service';

@Controller('subnet')
export class SubnetController {
  constructor(private readonly subnetService: SubnetService) {}

  @Post('vlsm')
  @HttpCode(200)
  compute(@Body() createSubnetDto: CreateSubnetDto) {
    const vlsm_result: ResultSubnet | null = this.subnetService.compute(createSubnetDto);
    if (vlsm_result === null) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    return { data: vlsm_result, message: 'VLSM subnetting' };
  }

  @Get('vlsm')
  create() {
    const vlsm_result: ResultSubnet | null = this.subnetService.create();
    if (vlsm_result === null) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    return { data: vlsm_result, message: 'Random VLSM subnetting' };
  }
}