import {MigrationInterface, QueryRunner} from "typeorm";

// sudo npm i -g ts-node typescript
//
// typeorm migration:create -n add_some
// ts-node --transpile-only ./node_modules/typeorm/cli.js migration:run
// ts-node --transpile-only ./node_modules/typeorm/cli.js migration:revert

export class addSome1619039017774 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user RENAME COLUMN uuid TO uuid2`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user RENAME COLUMN uuid2 TO uuid`);
    }

}
