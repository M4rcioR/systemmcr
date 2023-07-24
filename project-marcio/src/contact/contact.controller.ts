import { Controller, Get, Post, Body } from '@nestjs/common';
import { ContactsService } from './contact.service';
import { CreateContactDto } from './contact.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { Contact } from './contact.entity';

@ApiTags('Contact')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Todos os Contatos', type: Contact, isArray: true}) 
  getAllContacts() {
    return this.contactsService.getAllContacts();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Registrar Contato', type: Contact}) 
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }
}
