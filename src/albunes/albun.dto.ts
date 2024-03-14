import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class AlbunesDTO {
   
    @IsNotEmpty()
@IsString()
    titulo:string;
    @IsNotEmpty()
@IsNumber()
    anio_lanzamiento:string;
    @IsNotEmpty()
@IsString()
    discografia:string;
    @IsNotEmpty()
@IsString()
    genero:string
    
}
