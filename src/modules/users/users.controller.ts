import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '../../auth/auth.guard';

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
  @UseGuards(AuthGuard)
  @Get('get-user-full/:username')
  getFullUser(@Param('username') username: string) {
    return this.usersService.getFullUserByUsername(username);
  }
}
