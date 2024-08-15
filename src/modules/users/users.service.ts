import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { PublicUserDto } from './dto/public-user.dto';
import { UtilitiesService } from '../utilities/utilities.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private utilities: UtilitiesService,
  ) {}

  async create(newUser: CreateUserDto): Promise<PublicUserDto> {
    const result = await this.userModel.create({
      username: newUser.username,
      password: await this.utilities.hashString(newUser.password),
    });
    const { password, ...createdUser } = result.toJSON();
    return createdUser;
  }

  async findOne(id: number): Promise<PublicUserDto> {
    return this.userModel.findOne({
      where: { id },
      attributes: ['id', 'username'],
    });
  }

  async getFullUserByUsername(username: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        username,
      },
    });
  }
}
