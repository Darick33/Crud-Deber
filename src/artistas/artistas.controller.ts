import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArtistasDTO } from './artista.dto';
import { ArtistasService } from './artistas.service';
import { IArtistas } from './artistas.interface';


@Controller('api/v1/artistas')
export class ArtistasController {
    constructor(private artistasServicio:ArtistasService){

    }

    @Get()
    todos(){
        return this.artistasServicio.todos();
    }

    @Get(':id')
    uno(@Param('id')id: string){
        return this.artistasServicio.uno(id); 
    }
    @Post()
   
    insertar(@Body()artista: ArtistasDTO){
        return this.artistasServicio.insertar(artista);
    }
    @Put(':id')
    actualizat(@Param('id')id:string, @Body() artista: ArtistasDTO){
        return this.artistasServicio.actualizar(id,artista);
    }
    @Delete(':id')
    eliminar(@Param ('id') id:string){
        return this.artistasServicio.eliminar(id);
    }

}
