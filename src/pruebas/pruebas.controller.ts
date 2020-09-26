import { Controller, Get } from '@nestjs/common';
import { PruebasService } from './pruebas.service';

@Controller('pruebas')
export class PruebasController {
    constructor(private readonly pruebasService: PruebasService) {}

    @Get('users')
    getUsers()
    {
        return this.pruebasService.getUsers();
    }

    @Get('orders')
    getOrders()
    {
        return this.pruebasService.getOrders();
    }

    @Get('orderswproducts')
    getOrdersWithProducts()
    {
        return this.pruebasService.getOrdersWithProducts();
    }

    @Get('products')
    getProducts()
    {
        return this.pruebasService.getProducts();
    }

    @Get('expenses')
    getExpenses()
    {
        return this.pruebasService.getExpenses();
    }

    @Get('transactions')
    getTransactions()
    {
        return this.pruebasService.getTransactions();
    }
}
