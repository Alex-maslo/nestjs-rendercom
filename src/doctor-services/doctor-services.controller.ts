import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorServicesService } from './doctor-services.service';
import { CreateDoctorServiceDto } from './dto/create-doctor-service.dto';
import { UpdateDoctorServiceDto } from './dto/update-doctor-service.dto';

@Controller('doctor-services')
export class DoctorServicesController {
  constructor(private readonly doctorServicesService: DoctorServicesService) {}

  @Post()
  create(@Body() createDoctorServiceDto: CreateDoctorServiceDto) {
    return this.doctorServicesService.create(createDoctorServiceDto);
  }

  @Get()
  findAll() {
    return this.doctorServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorServiceDto: UpdateDoctorServiceDto) {
    return this.doctorServicesService.update(+id, updateDoctorServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorServicesService.remove(+id);
  }
}
