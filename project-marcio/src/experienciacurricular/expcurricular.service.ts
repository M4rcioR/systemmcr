import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExtracurricularActivity } from './expcurricular.entity';
import { CreateExtracurricularDto } from './expcurricular.dto';

@Injectable()
export class ExtracurricularService {
  constructor(
    @InjectRepository(ExtracurricularActivity)
    private readonly extracurricularRepository: Repository<ExtracurricularActivity>,
  ) {}

  getAllExtracurricular(): Promise<ExtracurricularActivity[]> {
    return this.extracurricularRepository.find();
  }

  createExtracurricular(createExtracurricularDto: CreateExtracurricularDto): Promise<ExtracurricularActivity> {
    const extracurricular = this.extracurricularRepository.create(createExtracurricularDto);
    return this.extracurricularRepository.save(extracurricular);
  }
}
