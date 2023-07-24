import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './user/user.controller';
import { UsersService } from './user/userservice';
import { User } from './user/user.entity';
import { ContactsController } from './contact/contact.controller';
import { ContactsService } from './contact/contact.service';
import { Contact } from './contact/contact.entity';
import { ExperienceController } from './experience/experience.controller';
import { ExperienceService } from './experience/experience.service';
import { Experience } from './experience/experience.entity';
import { EducationController } from './education/education.controller';
import { EducationService } from './education/education.service';
import { Education } from './education/education.entity';
import { ExtracurricularController } from './experienciacurricular/expcurricular.controller';
import { ExtracurricularService } from './experienciacurricular/expcurricular.service';
import { ExtracurricularActivity } from './experienciacurricular/expcurricular.entity';
import { CertificationsController } from './certification/certification.controller';
import { CertificationsService } from './certification/certification.service';
import { Certification } from './certification/certification.entity';
import { TokenMiddleware } from './auth/autenticacao';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', 
      host: 'localhost', 
      port: 3306, 
      username: 'root', 
      password: '', 
      database: 'systemmcr', 
      entities: [
        User,
        Contact,
        Experience,
        Education,
        ExtracurricularActivity,
        Certification,
      ], 
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([
      User,
      Contact,
      Experience,
      Education,
      ExtracurricularActivity,
      Certification,
    ]),
  ],
  controllers: [UsersController,CertificationsController,ContactsController, EducationController, ExperienceController, ExtracurricularController],
  providers: [UsersService, CertificationsService, ContactsService, EducationService, ExperienceService, ExtracurricularService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .forRoutes(
        'extraCurricular',
        'experience',
        'education',
        'certification',
        'address',
      );
      }
    }