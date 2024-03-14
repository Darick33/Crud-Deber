import { Injectable } from '@nestjs/common';
import { IAlbunes } from './albunes.interface';
import {v4 as uuidV4} from 'uuid';
import { AlbunesDTO } from './albun.dto';

@Injectable()
export class AlbunesService {
    albunes: IAlbunes []=[]
    todos(){
        return this.albunes;
    }

    uno(id: string){
        return this.albunes.find((albun)=>albun.id == id);
    }

    insertar(albun:AlbunesDTO){
        const alb = {
            id:uuidV4(),
            ...albun,

        };
        this.albunes.push(alb);
        return this.albunes;

    }

    actualizar(id:string, albunActualizar: AlbunesDTO){
        const nuevoalb = {id, ...albunActualizar};
        this.albunes = this.albunes.map((albun)=>albun.id ===id ? nuevoalb : albun);
        return nuevoalb;
        
    }
    eliminar(id: string){
        this.albunes = this.albunes.filter((albun)=> albun.id !==id);
        return 'Eliminado el albun ';
    }
}
