import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
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

  async search(
    searchTerm = '',
    sortOrder: 'ASC' | 'DESC' = 'ASC',
  ): Promise<Clinic[]> {
    return this.clinicRepository.find({
      where: { name: ILike(`%${searchTerm}%`) },
      order: { name: sortOrder },
    });
  }
}
