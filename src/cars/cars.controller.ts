import { Body, Controller,Delete,Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCartDto } from './dto/create-car.dto';

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
      return createCartDto
    }

    @Patch(':id')
    updateCar( 
        @Param('id', ParseIntPipe ) id: number,
        @Body() body: any 
    ){
        
        return body
    }

    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number  ){
        return {
            method: 'delete', 
            id
        }
    }
    
    

}
