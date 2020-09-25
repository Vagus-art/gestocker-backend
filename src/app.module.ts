import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebasController } from './pruebas/pruebas.controller';
import { PruebasService } from './pruebas/pruebas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { PruebasModule } from './pruebas/pruebas.module';
import {
  Contacts,
  ExpenseCategories,
  Expenses,
  OrderProducts,
  Orders,
  ProductCategories,
  ProductHistory,
  Products,
  Transactions,
  Users,
} from 'src/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'chakra_stock',
      entities: [
        Contacts,
        ExpenseCategories,
        Expenses,
        OrderProducts,
        Orders,
        ProductCategories,
        ProductHistory,
        Products,
        Transactions,
        Users,
      ],
      synchronize: true,
    }),
    UsersModule,
    PruebasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
