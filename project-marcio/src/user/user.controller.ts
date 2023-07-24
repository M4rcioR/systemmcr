import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './userservice';
import { CreateUserDto } from './user.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiResponse({status: 200, description: 'Todos os Usuarios', type: User, isArray: true})
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Post()
  @ApiResponse({status: 201, description: 'Registrar usuario', type: User})
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }
}

 