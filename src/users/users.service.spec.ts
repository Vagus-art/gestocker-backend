import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have a get user method called getUser', () => {
    expect(service.getUser).toBeDefined();
  });

  it('should have a post user method called postUser', () => {
    expect(service.postUser).toBeDefined();
  });

  it('should have an update user method called updateUser', () => {
    expect(service.updateUser).toBeDefined();
  });

  it('should have a delete user method called deleteUser', () => {
    expect(service.deleteUser).toBeDefined();
  });

  it('should have a get all users method called getAllUsers', () => {
    expect(service.getAllUsers).toBeDefined();
  });
});
