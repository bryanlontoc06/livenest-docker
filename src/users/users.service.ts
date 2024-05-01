import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  /**
   * Create a new user
   */
  async create(name: string, email: string, password: string): Promise<User> {
    const createdUser = new this.userModel({ name, password, email });
    return await createdUser.save();
  }

  /**
   * Get all users
   */
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }
}
