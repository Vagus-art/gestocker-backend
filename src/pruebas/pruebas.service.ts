import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/Users';
import { Orders } from 'src/entities';

@Injectable()
export class PruebasService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
  ) {}
  getUsers() {
    return this.usersRepository.find();
  }
  getOrders() {
    return this.ordersRepository.find();
  }
}
