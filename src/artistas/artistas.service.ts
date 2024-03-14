import { Injectable } from '@nestjs/common';
import { IArtistas } from './artistas.interface';
import {v4 as uuidV4} from 'uuid';
import { ArtistasDTO } from './artista.dto';

@Injectable()
export class ArtistasService {
    artistas: IArtistas []=[]
    todos(){
        return this.artistas;
    }

    uno(id: string){
        return this.artistas.find((artista)=>artista.id == id);
    }

    insertar(artista:ArtistasDTO){
        const art = {
            id:uuidV4(),
            ...artista,

        };
        this.artistas.push(art);
        return this.artistas;

    }

    actualizar(id:string, artistaActualizar: ArtistasDTO){
        const nuevoart = {id, ...artistaActualizar};
        this.artistas = this.artistas.map((artista)=>artista.id ===id ? nuevoart : artista);
        return nuevoart;
        
    }
    eliminar(id: string){
        this.artistas = this.artistas.filter((artista)=> artista.id !==id);
        return 'artista murido';
    }
}
