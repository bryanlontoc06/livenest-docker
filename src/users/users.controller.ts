import { Body, Controller, Post } from '@nestjs/common';
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
}
