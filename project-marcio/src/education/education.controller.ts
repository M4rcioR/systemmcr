import { Controller, Get, Post, Body } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './education.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Education } from './education.entity';

@ApiTags('Education')
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Todas Escolaridades ', type: Education, isArray: true})
  getAllEducation() {
    return this.educationService.getAllEducation();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Registrar Escolaridade ', type: Education })
  createEducation(@Body() createEducationDto: CreateEducationDto) {
    return this.educationService.createEducation(createEducationDto);
  }
}
