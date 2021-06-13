import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class adcionaMarcaNoModelo1623603808972 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('modelo', new TableColumn({
            name: 'marca_id',
            type: 'bigint',
            isNullable: true,
        }));

        await queryRunner.createForeignKey('modelo', new TableForeignKey({
            name: 'modelo_marca_fk',
            columnNames: ['marca_id'],
            referencedTableName: 'marca',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('modelo', 'modelo_marca_fk');
        await queryRunner.dropColumn('modelo', 'marca_id');
    }

}
