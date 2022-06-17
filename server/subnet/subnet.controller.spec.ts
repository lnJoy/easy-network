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
    it('should return "OK"', () => {
      const requestDto: CreateSubnetDto = {
        network_id: '192.168.0.0/24',
        subnets: [{
              name: 'A',
              needed_size: 30
            }],
      };
      const responseData = {
        data: [{
                name: "A",
                needed_size: 30,
                allocated_size: 64,
                network_address: "192.168.0.0",
                prefix: 26,
                subnet_mask: "255.255.255.192",
                range: "192.168.0.1 - 192.168.0.62",
                broadcast: "192.168.0.63"
            }],
        "message": "VLSM subnetting"
      }
      expect(subnetController.compute(requestDto)).toMatchObject(responseData);
    });
  });
});
