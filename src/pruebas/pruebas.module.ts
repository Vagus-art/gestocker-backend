import { Module } from '@nestjs/common';
import { PruebasController } from './pruebas.controller';
import { PruebasService } from './pruebas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expenses, Orders, Products, Transactions, Users } from 'src/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Orders, Expenses, Products, Transactions]),
  ],
  controllers: [PruebasController],
  providers: [PruebasService],
})
export class PruebasModule {}
