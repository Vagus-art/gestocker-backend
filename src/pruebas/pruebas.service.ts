import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/Users';
import { Expenses, Orders, Products, Transactions } from 'src/entities';

@Injectable()
export class PruebasService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    @InjectRepository(Expenses)
    private expensesRepository: Repository<Expenses>,
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
    @InjectRepository(Transactions)
    private transactionsRepository: Repository<Transactions>,
  ) {}
  getUsers() {
    return this.usersRepository.find();
  }
  getOrders() {
    return this.ordersRepository.find();
  }

  async getOrdersWithProducts() {

    const orders = await this.ordersRepository.findAndCount({take:10});

    const ordersWithPaid = [];

    for (const order of orders[0]){
      const order_transactions = await this.transactionsRepository.find({where:{
        order_id:order.order_id
      }});
      let paid = 0;
      order_transactions.forEach((transaction)=>paid+=transaction.sum);
      ordersWithPaid.push({paid,...order});
    };

    return {result:ordersWithPaid,count:orders[1]};

  }

  getExpenses() {
    return this.expensesRepository.find();
  }
  getProducts() {
    return this.productsRepository.find();
  }
  getTransactions() {
    return this.transactionsRepository.find();
  }
}
