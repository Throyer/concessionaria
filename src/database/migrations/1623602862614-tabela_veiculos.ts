import {MigrationInterface, QueryRunner, Table, TableColumn} from "typeorm";

export class tabelaVeiculos1623602862614 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'veiculo',
            columns: [
                new TableColumn({
                    name: 'id',
                    type: 'bigint',
                    generationStrategy: 'increment',
                    isPrimary: true,
                    isGenerated: true,
                }),
                new TableColumn({
                    name: 'placa',
                    type: 'varchar',
                    isNullable: true,
                }),
                new TableColumn({
                    name: 'quilometragem',
                    type: 'varchar',
                    isNullable: true,
                }),
                new TableColumn({
                    name: 'cor',
                    type: 'varchar',
                    isNullable: true,
                }),
                new TableColumn({
                    name: 'preco',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                    default: 0,
                    isNullable: true,
                }),
                new TableColumn({
                    name: 'quantidade_portas',
                    type: 'int',
                    isNullable: true,
                }),
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('veiculo')
    }

}
