import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  postUser(): string {
    return 'Post user';
  }
  @Get()
  getUser(): string {
    return 'Get user';
  }
  @Put()
  updateUser(): string {
    return 'Update user';
  }
  @Delete()
  deleteUser(): string {
    return 'Delete user';
  }
  @Get('list')
  getAllUsers(): string {
    return 'Get all users';
  }
}
