import { PartialType } from '@nestjs/mapped-types';
import { CreateRiesgoDto } from './create-riesgo.dto';

export class UpdateRiesgoDto extends PartialType(CreateRiesgoDto) {
    titulo?: string;
    descripcion?: string;
    categoria?: string;
    probabilidad?: number;
    impacto?: number;
    estado?: string;
    responsable?: string;
}
