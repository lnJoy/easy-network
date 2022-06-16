import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateSubnetDto } from './dto/create-subnet.dto';
import { VLSM } from './models/vlsm.model';
import { VLSMService } from './vlsm.service';

@Controller('vlsm')
export class VLSMController {
  constructor(private readonly vlsmService: VLSMService) {}

  @Post()
  @HttpCode(200)
  compute(@Body() createSubnetDto: CreateSubnetDto) {
    const vlsm_result: VLSM[] | undefined = this.vlsmService.compute(createSubnetDto);
    if (vlsm_result === null) throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);

    return { data: vlsm_result, message: 'VLSM subnetting' };
  }
}