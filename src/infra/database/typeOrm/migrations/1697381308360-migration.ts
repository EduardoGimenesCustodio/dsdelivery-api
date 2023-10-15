import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1697381308360 implements MigrationInterface {
  name = 'Migration1697381308360';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" double precision NOT NULL, "description" character varying NOT NULL, "image_uri" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "order_product" ("id" SERIAL NOT NULL, "order_id" integer NOT NULL, "product_id" integer NOT NULL, CONSTRAINT "PK_539ede39e518562dfdadfddb492" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "tb_order" ("id" SERIAL NOT NULL, "address" character varying NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "moment" TIMESTAMP NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_0ae1adc424fd20d36fe23962c8b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_product" ADD CONSTRAINT "FK_ea143999ecfa6a152f2202895e2" FOREIGN KEY ("order_id") REFERENCES "tb_order"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_product" ADD CONSTRAINT "FK_400f1584bf37c21172da3b15e2d" FOREIGN KEY ("product_id") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order_product" DROP CONSTRAINT "FK_400f1584bf37c21172da3b15e2d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "order_product" DROP CONSTRAINT "FK_ea143999ecfa6a152f2202895e2"`,
    );
    await queryRunner.query(`DROP TABLE "tb_order"`);
    await queryRunner.query(`DROP TABLE "order_product"`);
    await queryRunner.query(`DROP TABLE "product"`);
  }
}
