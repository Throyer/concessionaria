import { Column, Entity, Generated, PrimaryColumn } from "typeorm";
import { IntegerTransformer } from "../../transformers/IntegerTransformer";

@Entity('marca')
export class Marca {
    @Generated('increment')
    @PrimaryColumn('bigint', {
        name: 'id',
        transformer: IntegerTransformer.getInstance()
    })
    id: number;

    @Column('varchar', {
        name: 'nome'
    })
    nome: string;
}