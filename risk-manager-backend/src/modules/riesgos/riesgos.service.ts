import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRiesgoDto } from './dto/create-riesgo.dto';
import { UpdateRiesgoDto } from './dto/update-riesgo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Riesgo } from './entities/riesgo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RiesgosService {

  constructor(
    @InjectRepository(Riesgo)
    private riesgosRepository: Repository<Riesgo>
  ) { }

  async create(createRiesgoDto: CreateRiesgoDto): Promise<Riesgo> {

    const riesgo = this.riesgosRepository.create(createRiesgoDto);
    return await this.riesgosRepository.save(riesgo)

  }

  async findOne(id: number): Promise<Riesgo> {

    const riesgo = await this.riesgosRepository.findOne({ where: { id } })

    if (!riesgo) {
      throw new NotFoundException(`Riesgo con ID ${id} no encontrado`)
    }

    return riesgo
  }

  async findAll(): Promise<Riesgo[]> {

    return await this.riesgosRepository.find();

  }



  async update(id: number, updateRiesgoDto: UpdateRiesgoDto): Promise<Riesgo> {

    const riesgo = await this.findOne(id)

    Object.assign(riesgo, updateRiesgoDto)

    return await this.riesgosRepository.save(riesgo)
  }

  async remove(id: number): Promise<void> {

    const riesgo = await this.findOne(id)

    await this.riesgosRepository.remove(riesgo);
  }

  async findbycategoria(categoria: string): Promise<Riesgo[]>{

    return await this.riesgosRepository.find({ where: { categoria } });

  }

}
