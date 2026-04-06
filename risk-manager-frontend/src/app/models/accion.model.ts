export interface Accion {
  id?: number;
  titulo: string;
  descripcion: string;
  responsable: string;
  fechaCompromiso: Date;
  estado: string;
  fechaCreacion?: Date;
  riesgoId: number;
}