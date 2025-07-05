import { Module } from '@nestjs/common';
import { DoctorServicesService } from './doctor-services.service';
import { DoctorServicesController } from './doctor-services.controller';

@Module({
  controllers: [DoctorServicesController],
  providers: [DoctorServicesService],
})
export class DoctorServicesModule {}
