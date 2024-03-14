import { Module } from '@nestjs/common';
import { AlbunesService } from './albunes.service';
import { AlbunesController } from './albunes.controller';

@Module({
  providers: [AlbunesService],
  controllers: [AlbunesController]
})
export class AlbunesModule {}
