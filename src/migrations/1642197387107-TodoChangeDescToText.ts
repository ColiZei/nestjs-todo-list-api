import { MigrationInterface, QueryRunner } from 'typeorm';

export class TodoChangeDescToText1642197387107 implements MigrationInterface {
  name = 'TodoChangeDescToText1642197387107';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`description\` \`text\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`text\` \`description\` varchar(255) NOT NULL`,
    );
  }
}
