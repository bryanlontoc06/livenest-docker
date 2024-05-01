import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body('name') name: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    const generatedId = await this.usersService.create(name, password, email);
    return { id: generatedId };
  }

  @Get()
  async findAll(): Promise<any> {
    return await this.usersService.findAll();
  }
}
