import { MigrationInterface, QueryRunner } from "typeorm";

export class productsTableNNNCart1652203765202 implements MigrationInterface {
    name = 'productsTableNNNCart1652203765202'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" double precision NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_product_product" ("cartId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_3fe167ea5ec46c18adc550e9419" PRIMARY KEY ("cartId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_79eff0740cf8d0afd9cf339b83" ON "cart_product_product" ("cartId") `);
        await queryRunner.query(`CREATE INDEX "IDX_85d9796b308d382c39d3503181" ON "cart_product_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "cart_product_product" ADD CONSTRAINT "FK_79eff0740cf8d0afd9cf339b839" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" ADD CONSTRAINT "FK_85d9796b308d382c39d35031818" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_product_product" DROP CONSTRAINT "FK_85d9796b308d382c39d35031818"`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" DROP CONSTRAINT "FK_79eff0740cf8d0afd9cf339b839"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_85d9796b308d382c39d3503181"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_79eff0740cf8d0afd9cf339b83"`);
        await queryRunner.query(`DROP TABLE "cart_product_product"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
