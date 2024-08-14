import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  create(newUser: CreateUserDto): Promise<User> {
    return this.userModel.create({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
    });
  }

  findOne(id: number) {
    return this.userModel.findOne({
      where: { id },
    });
  }
}
