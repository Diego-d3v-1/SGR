export interface Riesgo {
  id?: number;
  titulo: string;
  descripcion: string;
  categoria: string;
  probabilidad: number;
  impacto: number;
  estado: string;
  responsable: string;
  fechaDeteccion?: Date;
}