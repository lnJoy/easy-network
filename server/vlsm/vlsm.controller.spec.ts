import { Test, TestingModule } from '@nestjs/testing';
import { CreateSubnetDto } from './dto/create-subnet.dto';
import { VLSMController } from './vlsm.controller';
import { VLSMService } from './vlsm.service';

describe('VLSMController', () => {
  let vlsmController: VLSMController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VLSMController],
      providers: [VLSMService],
    }).compile();

    vlsmController = app.get<VLSMController>(VLSMController);
  });

  describe('root', () => {
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
      expect(vlsmController.compute(requestDto)).toMatchObject(responseData);
    });
  });
});
