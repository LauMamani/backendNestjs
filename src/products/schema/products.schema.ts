import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductsDocument = HydratedDocument<Products>;

@Schema()
export class Products {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  code: string;

  @Prop()
  price: number;

  @Prop()
  stock: number;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);