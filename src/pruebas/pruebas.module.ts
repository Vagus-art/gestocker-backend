import { Module } from '@nestjs/common';
import { PruebasController } from './pruebas.controller';
import { PruebasService } from './pruebas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders, Users } from 'src/entities';

@Module({ imports: [TypeOrmModule.forFeature([Users, Orders])], controllers: [PruebasController], providers: [PruebasService] })
export class PruebasModule {

}
