import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ClinicsService } from './clinics.service';
import { CreateClinicDto } from './dto/create-clinic.dto';

@Controller('clinics')
export class ClinicsController {
  constructor(private readonly clinicsService: ClinicsService) {}

  @Post()
  create(@Body() createClinicDto: CreateClinicDto) {
    return this.clinicsService.create(createClinicDto);
  }

  @Get()
  search(
    @Query('search') search?: string,
    @Query('sort') sort: 'ASC' | 'DESC' = 'ASC',
  ) {
    return this.clinicsService.search(search, sort);
  }
}
