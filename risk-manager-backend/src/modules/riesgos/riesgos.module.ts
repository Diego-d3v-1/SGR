import { Module } from '@nestjs/common';
import { RiesgosService } from './riesgos.service';
import { RiesgosController } from './riesgos.controller';
import { Riesgo } from './entities/riesgo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Riesgo])],
  controllers: [RiesgosController],
  providers: [RiesgosService],
})
export class RiesgosModule {}
