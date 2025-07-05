import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { Clinic } from './entities/clinic.entity';

@Injectable()
export class ClinicsService {
  constructor(
    @InjectRepository(Clinic)
    private clinicRepository: Repository<Clinic>,
  ) {}

  async create(createClinicDto: CreateClinicDto): Promise<Clinic> {
    const clinic = this.clinicRepository.create(createClinicDto);
    return this.clinicRepository.save(clinic);
  }

  async search(searchTerm = ''): Promise<Clinic[]> {
    return this.clinicRepository.find({
      where: { name: Like(`%${searchTerm}%`) },
      order: { id: 'ASC' }, // 👈 Сортування по id за замовчуванням
    });
  }
}
