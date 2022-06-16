import { IsArray, IsString } from 'class-validator';
import { type } from 'os';
import { Subnet } from '../models/subnet.model';

export class CreateSubnetDto {
  @IsString()
  readonly ipv4: string;

  @IsArray()
  readonly subnets: Subnet[];
}