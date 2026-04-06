import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>) { }

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {

    const categoria = this.categoriaRepository.create(createCategoriaDto)

    return await this.categoriaRepository.save(categoria)

  }

  async findAll(): Promise<Categoria[]> { //El findall viene como array, por que viene todo el objeto. Por eso la promesa es Objeto
    return await this.categoriaRepository.find()
  }

  async findOne(id: number): Promise<Categoria> {

    const categoria = await this.categoriaRepository.findOne({ where: { id } })

    if (!categoria) {
       throw new NotFoundException('No se ha encontrado una categoria')
    }

    return categoria;

  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto): Promise<Categoria> {

    const categoria = await this.findOne(id)

    Object.assign(categoria, updateCategoriaDto)

    return await this.categoriaRepository.save(categoria);
  }

  async remove(id: number): Promise<void> {
    const categoria = await this.findOne(id)

   await this.categoriaRepository.remove(categoria)
  }
}
