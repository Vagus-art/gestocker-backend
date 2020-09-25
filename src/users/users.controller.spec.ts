import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have a get user method called getUser', () => {
    expect(controller.getUser).toBeDefined();
  });

  it('should have a post user method called postUser', () => {
    expect(controller.postUser).toBeDefined();
  });

  it('should have an update user method called updateUser', () => {
    expect(controller.updateUser).toBeDefined();
  });

  it('should have a delete user method called deleteUser', () => {
    expect(controller.deleteUser).toBeDefined();
  });

  it('should have a get all users method called getAllUsers', () => {
    expect(controller.getAllUsers).toBeDefined();
  });
});
