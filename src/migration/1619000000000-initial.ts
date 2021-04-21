import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1619000000000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE user (
                id int NOT NULL AUTO_INCREMENT,
                firstName varchar(255) NOT NULL,
                lastName varchar(255) NOT NULL,
                age int NOT NULL,
                uuid varchar(36) NOT NULL,
                PRIMARY KEY (id)
            ) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}

