import { Body, Controller, Get, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateSubnetDto } from './dto/create-subnet.dto';
import { ResultSubnet } from './models/subnet.model';
import { SubnetService } from './subnet.service';

@Controller('subnet')
export class SubnetController {
  constructor(private readonly subnetService: SubnetService) {}

  @Post('vlsm')
  @HttpCode(200)
  vlsmCompute(@Body() createSubnetDto: CreateSubnetDto) {
    const vlsm_result: ResultSubnet | null = this.subnetService.vlsmCompute(createSubnetDto);
    if (vlsm_result === null) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    return { data: vlsm_result, message: 'VLSM subnetting' };
  }

  @Get('vlsm')
  vlsmCreate() {
    const vlsm_result: ResultSubnet | null = this.subnetService.vlsmCreate();
    if (vlsm_result === null) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    return { data: vlsm_result, message: 'Random VLSM subnetting' };
  }
}