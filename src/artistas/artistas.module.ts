import { Module } from '@nestjs/common';
import { ArtistasService } from './artistas.service';
import { ArtistasController } from './artistas.controller';

@Module({
  providers: [ArtistasService],
  controllers: [ArtistasController]
})
export class ArtistasModule {}
