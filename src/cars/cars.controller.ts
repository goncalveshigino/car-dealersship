import { Body, Controller,Delete,Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto } from './dto/create-car.dto';
import { UpdateCartDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor(   private readonly carsService: CarsService ){}


    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }
    
    @Get(':id')
    getCarById( @Param('id', ParseUUIDPipe ) id: string  ) { 
        return this.carsService.findOneById( id )
    }

    @Post()
    createCar( @Body() createCartDto: CreateCartDto ){
      return this.carsService.create( createCartDto )
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseUUIDPipe ) id: string,
        @Body() updateCartDto: UpdateCartDto 
    ){  
        return this.carsService.update( id, updateCartDto )
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseUUIDPipe ) id: string  ){
       return this.carsService.delete( id )
    }
    
}
