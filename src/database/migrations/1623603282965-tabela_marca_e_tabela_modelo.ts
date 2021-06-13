import { MigrationInterface, QueryRunner, Table, TableColumn } from "typeorm";

export class tabelaMarcaETabelaModelo1623603282965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'marca',
            columns: [
                new TableColumn({
                    name: 'id',
                    type: 'bigint',
                    generationStrategy: 'increment',
                    isPrimary: true,
                    isGenerated: true,
                }),
                new TableColumn({
                    name: 'nome',
                    type: 'varchar',
                    isNullable: true,
                }),
            ]
        }));

        await queryRunner.createTable(new Table({
            name: 'modelo',
            columns: [
                new TableColumn({
                    name: 'id',
                    type: 'bigint',
                    generationStrategy: 'increment',
                    isPrimary: true,
                    isGenerated: true,
                }),
                new TableColumn({
                    name: 'nome',
                    type: 'varchar',
                    isNullable: true,
                }),
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('marca');
        queryRunner.dropTable('modelo');
    }

}
