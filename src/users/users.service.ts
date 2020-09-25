import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  postUser(): string {
    return 'Post user';
  }
  getUser(): string {
    return 'Get user';
  }
  updateUser(): string {
    return 'Update user';
  }
  deleteUser(): string {
    return 'Delete user';
  }
  getAllUsers(): string {
    return 'Get all users';
  }
}
