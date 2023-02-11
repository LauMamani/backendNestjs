import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'BIENVENID@ a ---> NEST-PRODUCTS!';
  }

}
