import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';

import { CARDS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { BrandsService } from '../brands/brands.service';


@Injectable()
export class SeedService {

  constructor( 
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService
   ){}
  

  ppopularDB() {

   //CARDS_SEED
   //BRANDS_SEED
   this.carsService.fillCarsWithSeedDara( CARDS_SEED );
   this.brandsService.fillBrandWithSeedDara( BRANDS_SEED );

   return 'Seed exccuted';

  }


}
