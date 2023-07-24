import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Certification } from './certification.entity';
import { CreateCertificationDto } from './certification.dto';

@Injectable()
export class CertificationsService {
  constructor(
    @InjectRepository(Certification)
    private readonly certificationRepository: Repository<Certification>,
  ) {}

  getAllCertifications(): Promise<Certification[]> {
    return this.certificationRepository.find();
  }

  createCertification(createCertificationDto: CreateCertificationDto): Promise<Certification> {
    const certification = this.certificationRepository.create(createCertificationDto);
    return this.certificationRepository.save(certification);
  }
}
