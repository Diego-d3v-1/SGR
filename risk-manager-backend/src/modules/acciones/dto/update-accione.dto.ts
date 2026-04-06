import { PartialType } from '@nestjs/mapped-types';
import { CreateAccioneDto } from './create-accione.dto';

export class UpdateAccioneDto extends PartialType(CreateAccioneDto) {
    titulo?: string;
    descripcion?: string;
    responsable?: string;
    fechaCompromiso?: Date;
    estado?: string;
    fechaCreacion?: Date;
    riesgoId?: number;
}
