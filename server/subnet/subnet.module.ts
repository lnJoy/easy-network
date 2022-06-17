import { Module } from "@nestjs/common";
import { SubnetController } from "./subnet.controller";
import { SubnetService } from "./subnet.service";

@Module({
  controllers: [SubnetController],
  providers: [SubnetService]
})
export class SubnetModule {}