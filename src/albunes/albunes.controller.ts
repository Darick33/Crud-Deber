import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AlbunesService } from './albunes.service';
import { AlbunesDTO } from './albun.dto';

@Controller('api/v1/albunes')
export class AlbunesController {
    constructor(private albunesServicio:AlbunesService){

    }

    @Get()
    todos(){
        return this.albunesServicio.todos();
    }

    @Get(':id')
    uno(@Param('id')id: string){
        return this.albunesServicio.uno(id); 
    }
    @Post()
   
    insertar(@Body()albun: AlbunesDTO){
        return this.albunesServicio.insertar(albun);
    }
    @Put(':id')
    actualizat(@Param('id')id:string, @Body() albun: AlbunesDTO){
        return this.albunesServicio.actualizar(id,albun);
    }
    @Delete(':id')
    eliminar(@Param ('id') id:string){
        return this.albunesServicio.eliminar(id);
    }
}
