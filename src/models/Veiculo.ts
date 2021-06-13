import { Column, Entity, Generated, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { DecimalTransformer } from "../../transformers/DecimalTransformer";
import { IntegerTransformer } from "../../transformers/IntegerTransformer";
import { Modelo } from "./Modelo";
import { Opcional } from "./Opcional";

@Entity('veiculo')
export class Veiculo {

    @Generated('increment')
    @PrimaryColumn('bigint', {
        name: 'id',
        transformer: IntegerTransformer.getInstance()
    })
    id: number;

    @Column('varchar', {
        name: 'placa'
    })
    placa: string;

    @Column('varchar', {
        name: 'quilometragem'
    })
    quilometragem: string;

    @Column('varchar', {
        name: 'cor'
    })
    cor: string;

    @Column({
        name: 'preco',
        precision: 10,
        scale: 2,
        transformer: DecimalTransformer.getInstance(),
    })
    preco: number;

    @Column('int', {
        name: 'quantidade_portas'
    })
    quantidadeDePortas: number;

    @JoinColumn({
        name: 'modelo_id'
    })
    @ManyToOne(() => Modelo)
    modelo: Modelo;

    @ManyToMany(() => Opcional)
    @JoinTable({
        name: 'veiculo_opcional',
        joinColumn: {
            name: 'veiculo_id'
        },
        inverseJoinColumn: {
            name: 'opcional_id'
        }
    })
    opcionais: Opcional[]
}