import { PartialType } from '@nestjs/mapped-types';
import { CreateDoctorServiceDto } from './create-doctor-service.dto';

export class UpdateDoctorServiceDto extends PartialType(CreateDoctorServiceDto) {}
