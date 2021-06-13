import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class adcionaModeloNoVeiculo1623603452842 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn('veiculo', new TableColumn({
            name: 'modelo_id',
            type: 'bigint',
            isNullable: true,
        }));

        await queryRunner.createForeignKey('veiculo', new TableForeignKey({
            name: 'veiculo_modelo_fk',
            columnNames: ['modelo_id'],
            referencedTableName: 'modelo',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('veiculo', 'veiculo_modelo_fk');
        await queryRunner.dropColumn('veiculo', 'modelo_id');
    }

}
