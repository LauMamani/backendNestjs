import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products, ProductsDocument } from './schema/products.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel(Products.name) private productsModule: Model<ProductsDocument>, 
  ) {}

  async create(createProductDto: CreateProductDto) {
    const productCreated = await this.productsModule.create(createProductDto)
    return productCreated;
  }

  async findAll() {
    const listProducts = await this.productsModule.find({});
    return listProducts;
  }

  async findOne(id: string) {
    const findedProduct = await this.productsModule.findById(id);
    return findedProduct;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const updatedProduct = await this.productsModule.updateOne({ _id: id }, updateProductDto);
    return updatedProduct;
  }

  async remove(id: string) {
    const deletedProduct = await this.productsModule.deleteOne({ _id: id });
    return deletedProduct;
  }
}
