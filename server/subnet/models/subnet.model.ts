import { VLSM } from "./vlsm.model";

export class Subnet {
  readonly name: string;
  
  readonly needed_size: number;
};

export class ResultSubnet {
  readonly network_id: string;

  readonly subnets: VLSM[]
}