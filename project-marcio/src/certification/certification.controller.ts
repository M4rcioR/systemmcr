import { Controller, Get, Post, Body } from '@nestjs/common';
import { CertificationsService } from './certification.service';
import { CreateCertificationDto } from './certification.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ContactsController } from 'src/contact/contact.controller';

@ApiTags('Certification')
@Controller('certifications')
export class CertificationsController {
  constructor(private readonly certificationsService: CertificationsService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Todas Certificações', type: ContactsController, isArray: true}) 
  getAllCertifications() {
    return this.certificationsService.getAllCertifications();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Registrar Certificação', type: ContactsController})
  createCertification(@Body() createCertificationDto: CreateCertificationDto) {
    return this.certificationsService.createCertification(createCertificationDto);
  }
}
