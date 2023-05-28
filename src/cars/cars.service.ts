import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCartDto, UpdateCartDto } from './dto/dto';



@Injectable()
export class CarsService {

    private cars: Car[] = [

        // {
        //     id: uuid(), 
        //     brand: 'Toyota', 
        //     model: 'Corola'
        // }, 

    ];


    findAll(){
        return this.cars
    }

    findOneById( id: string ) {
        const car = this.cars.find( car => car.id === id );

        if( !car ) throw new NotFoundException(`Car with id ''${ id } not found`);
        
        return car;
        //return this.cars[id]
    }

    create( createCartDto: CreateCartDto ){
      
        const car: Car = {
          id: uuid(), 
          ...createCartDto
        }

        this.cars.push( car )

        return car;
    }

    update( id: string, updateCartDto: UpdateCartDto) {

      let carDB = this.findOneById( id );

      this.cars = this.cars.map( car => {
          
        if( car.id === id ){
            carDB = {...carDB,...updateCartDto, id}

            return carDB;
        }

        return car;
      })
        
      return carDB; 
    }

    delete( id: string ) {
        const car = this.findOneById( id );
        this.cars = this.cars.filter( car => car.id !== id );
        return;
    }
}
