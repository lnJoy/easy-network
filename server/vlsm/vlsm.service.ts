import { Injectable } from "@nestjs/common";
import { CreateSubnetDto } from "./dto/create-subnet.dto";
import { VLSM } from "./models/vlsm.model";
import * as wasm from '../../pkg/subnetting_wasm';
import { Subnet } from "./models/subnet.model";

@Injectable()
export class VLSMService {
  compute(networkInfo: CreateSubnetDto): VLSM[] {
    const subnets: Subnet[] = [];
    for (const subnet of networkInfo.subnets) {
      subnets.push({
        name: subnet.name,
        needed_size: subnet.needed_size,
      });
    }

    return wasm.vlsm_calculate(networkInfo.ipv4, subnets);
  }
}