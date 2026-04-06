import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Categoria')
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column('text')
    descripcion: string

    @Column()
    color: string

    @CreateDateColumn()
    fechaCreacion: Date
}
