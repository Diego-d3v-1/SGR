import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiesgosModule } from './modules/riesgos/riesgos.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { AccionesModule } from './modules/acciones/acciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin123',
      database: 'riskmanager',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    RiesgosModule,
    CategoriasModule,
    AccionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}