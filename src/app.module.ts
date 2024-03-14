import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArtistasModule } from './artistas/artistas.module';
import { AlbunesModule } from './albunes/albunes.module';


@Module({
  imports: [ArtistasModule, AlbunesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
