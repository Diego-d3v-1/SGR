import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccionesService } from './acciones.service';
import { CreateAccioneDto } from './dto/create-accione.dto';
import { UpdateAccioneDto } from './dto/update-accione.dto';

@Controller('acciones')
export class AccionesController {
  constructor(private readonly accionesService: AccionesService) { }

  @Post()
  create(@Body() createAccioneDto: CreateAccioneDto) {
    return this.accionesService.create(createAccioneDto);
  }

  @Get()
  findAll() {
    return this.accionesService.findAll();
  }

  @Get('riesgo/:riesgoId')
  findByRiesgo(@Param('riesgoId') riesgoId: string) {
    return this.accionesService.findByRiesgo(+riesgoId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accionesService.findOne(+id);
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccioneDto: UpdateAccioneDto) {
    return this.accionesService.update(+id, updateAccioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accionesService.remove(+id);
  }
}
