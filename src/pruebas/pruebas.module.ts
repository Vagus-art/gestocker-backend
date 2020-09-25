import { Module } from '@nestjs/common';
import { PruebasController } from './pruebas.controller';
import { PruebasService } from './pruebas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities';

@Module({ imports: [TypeOrmModule.forFeature([Users])], controllers: [PruebasController], providers: [PruebasService] })
export class PruebasModule {

}
