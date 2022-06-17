import { Test, TestingModule } from '@nestjs/testing';
import { CreateSubnetDto } from './dto/create-subnet.dto';
import { SubnetController } from './subnet.controller';
import { SubnetService } from './subnet.service';

describe('SubnetController', () => {
  let subnetController: SubnetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SubnetController],
      providers: [SubnetService],
    }).compile();

    subnetController = app.get<SubnetController>(SubnetController);
  });

  describe('[POST] /subnet/vlsm', () => {
    it('should return VLSM data', () => {
      const requestDto: CreateSubnetDto = {
        network_id: '192.168.0.0/24',
        subnets: [{
              name: 'A',
              needed_size: 30
            }],
      };
      const responseData = {
        data: {
          network_id: '192.168.0.0/24',
          subnets: [{
            name: "A",
            needed_size: 30,
            allocated_size: 32,
            network_address: "192.168.0.0",
            prefix: 27,
            subnet_mask: "255.255.255.224",
            range: "192.168.0.1 - 192.168.0.30",
            broadcast: "192.168.0.31"
          }],
        },
        "message": "VLSM subnetting"
      }
      expect(subnetController.compute(requestDto)).toMatchObject(responseData);
    });
  });

  describe('[GET] /subnet/vlsm', () => {
    it('should return "OK"', () => {
      expect(subnetController.create()).toBeInstanceOf(Object);
    });
  });
});
