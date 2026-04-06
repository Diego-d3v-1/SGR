import { Accion } from "src/modules/acciones/entities/accione.entity";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinColumn } from "typeorm";

@Entity('riesgos')
export class Riesgo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column('text')
    descripcion: string;

    @Column()
    categoria: string;

    @Column({ type: 'int', default: 1 })
    probabilidad: number;

    @Column({ type: 'int', default: 1 })
    impacto: number;

    @Column({ default: 'Abierto' })
    estado: string;

    @Column()
    responsable: string;

    @CreateDateColumn()
    fechaDeteccion: Date;

    @OneToMany(() => Accion, (accion) => accion.riesgo)
    acciones: Accion[];
    
}
