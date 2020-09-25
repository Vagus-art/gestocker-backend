import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PruebasController } from './pruebas/pruebas.controller';
import { PruebasService } from './pruebas/pruebas.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [AppController, UsersController, PruebasController],
  providers: [AppService, UsersService, PruebasService],
})
export class AppModule {}
