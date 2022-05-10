import { Entity, Column, PrimaryColumn, JoinTable, ManyToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Product } from "./product.entity";

@Entity()
export class Cart {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column("float")
  subtotal: number;

  @ManyToMany((type) => Product, {
    eager: true,
  })
  @JoinTable()
  product: Product[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
