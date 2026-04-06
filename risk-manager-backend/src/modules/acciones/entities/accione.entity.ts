import { Riesgo } from "src/modules/riesgos/entities/riesgo.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Acciones')
export class Accion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titulo: string;

    @Column('text')
    descripcion: string;

    @Column()
    responsable: string;

    @Column({type: 'date'})
    fechaCompromiso: Date;

    @Column({default: 'Pendiente'})
    estado: string;

    @CreateDateColumn()
    fechaCreacion: Date;

    @ManyToOne(() => Riesgo, (riesgo) => riesgo.acciones)
    @JoinColumn({name: 'riesgoId'})
    riesgo: Riesgo;

    @Column()
    riesgoId: number;
}
