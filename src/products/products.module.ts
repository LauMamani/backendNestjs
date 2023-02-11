import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products, ProductsSchema } from './schema/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
     {
      name: Products.name,
      schema: ProductsSchema,

     },
    ])
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
