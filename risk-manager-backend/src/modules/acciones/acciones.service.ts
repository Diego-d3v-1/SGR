import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccioneDto } from './dto/create-accione.dto';
import { UpdateAccioneDto } from './dto/update-accione.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Accion } from './entities/accione.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccionesService {

  constructor(
    @InjectRepository(Accion)
    private accionRepository: Repository<Accion>
  ){

  }

  async create(createAccioneDto: CreateAccioneDto): Promise <Accion> {
    
    const accion = this.accionRepository.create(createAccioneDto)

    return await this.accionRepository.save(accion)

  }

 async findAll(): Promise <Accion[]> {
    return await this.accionRepository.find()
  }

  async findOne(id: number): Promise<Accion> {
    
    const accion = await this.accionRepository.findOne({where: {id}})

    if (!accion){
      throw new NotFoundException('No se ha encontrado la accion')
    }

    return accion;

  }

  async update(id: number, updateAccioneDto: UpdateAccioneDto): Promise <Accion> {
    
    const accion = await this.findOne(id)

    Object.assign(accion, updateAccioneDto)

    return await this.accionRepository.save(accion)  

  }

  async remove(id: number): Promise <void> {
    const accion = await this.findOne(id)

    await this.accionRepository.remove(accion)
  }

  async findByRiesgo(riesgoId: number): Promise<Accion[]> {
    
    return await this.accionRepository.find({where: {riesgoId}})
  }

}
