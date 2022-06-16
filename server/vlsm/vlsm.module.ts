import { Module } from "@nestjs/common";
import { VLSMController } from "./vlsm.controller";
import { VLSMService } from "./vlsm.service";

@Module({
  controllers: [VLSMController],
  providers: [VLSMService]
})
export class VLSMModule {}