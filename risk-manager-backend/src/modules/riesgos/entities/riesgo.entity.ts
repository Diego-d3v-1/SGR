import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

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

    @Column({type: 'int', default: 1})
    impacto: number;

    @Column({default: 'Abierto'})
    estado: string;

    @Column()
    responsable: string;

    @CreateDateColumn()
    fechaCreacion: Date;
}
