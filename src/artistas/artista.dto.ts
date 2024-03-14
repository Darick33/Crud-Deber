import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ArtistasDTO {
@IsNotEmpty()
@IsString()        
nombre: string;
@IsNotEmpty()
@IsString()
genero: string;
@IsNotEmpty()
@IsString()
pais: string;
@IsNotEmpty()
@IsNumber()
anio_inicio_carrera: number;
@IsNotEmpty()
@IsEmail()
correo: string;
@IsNotEmpty()
@IsString()
contrasenia: string;
}
