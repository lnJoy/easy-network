import { Injectable } from "@nestjs/common";
import { CreateSubnetDto } from "./dto/create-subnet.dto";
import * as wasm from '../../pkg/subnetting_wasm';
import { ResultSubnet, Subnet } from "./models/subnet.model";

@Injectable()
export class SubnetService {
  compute(networkInfo: CreateSubnetDto): ResultSubnet {
    try {
      const subnets: Subnet[] = [];
      for (const subnet of networkInfo.subnets) {
        subnets.push({
          name: subnet.name,
          needed_size: subnet.needed_size,
        });
      }

      return wasm.vlsm_calculate(networkInfo.network_id, subnets);
    } catch (e) {
      return null;
    }
  }
  
  create(): ResultSubnet {
    try {
      return wasm.random_vlsm_calculate();
    } catch (e) {
      return null;
    }
  }
}