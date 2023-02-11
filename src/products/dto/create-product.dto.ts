import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    title: string;
    
    @IsNotEmpty()
    description: string; 
    
    @IsNotEmpty()
    code: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    stock: number;
}
