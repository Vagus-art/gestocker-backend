import { Controller, Get } from '@nestjs/common';
import { PruebasService } from './pruebas.service';

@Controller('pruebas')
export class PruebasController {
    constructor(private readonly pruebasService: PruebasService) {}

    @Get('user')
    getUsers()
    {
        return this.pruebasService.getUsers();
    }

    @Get('order')
    getOrders()
    {
        return this.pruebasService.getOrders();
    }
}
