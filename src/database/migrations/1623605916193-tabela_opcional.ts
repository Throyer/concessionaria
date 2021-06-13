import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class tabelaOpcional1623605916193 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'opcional',
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
            name: 'veiculo_opcional',
            columns: [
                new TableColumn({
                    name: 'veiculo_id',
                    type: 'bigint',
                    isNullable: true,
                }),
                new TableColumn({
                    name: 'opcional_id',
                    type: 'bigint',
                    isNullable: true,
                }),
            ]
        }));

        await queryRunner.createForeignKeys('veiculo_opcional', [
            new TableForeignKey({
                name: 'veiculo_opcional_fk',
                columnNames: ['veiculo_id'],
                referencedTableName: 'veiculo',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            }),
            new TableForeignKey({
                name: 'opcional_veiculo_fk',
                columnNames: ['opcional_id'],
                referencedTableName: 'opcional',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('veiculo_opcional', 'veiculo_opcional_fk');
        await queryRunner.dropForeignKey('veiculo_opcional', 'opcional_veiculo_fk');
        await queryRunner.dropTable('veiculo_opcional');
        await queryRunner.dropTable('opcional');
    }

}
