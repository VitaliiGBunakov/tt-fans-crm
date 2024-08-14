import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  create(@Body() newUser: CreateUserDto) {
    return this.usersService.create(newUser);
  }

  @Get('get-user/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }
}
