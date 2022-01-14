import { MigrationInterface, QueryRunner } from 'typeorm';

export class TodoChangeTextToDesc1642197924874 implements MigrationInterface {
  name = 'TodoChangeTextToDesc1642197924874';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`text\` \`description\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`todo\` CHANGE \`description\` \`text\` varchar(255) NOT NULL`,
    );
  }
}
