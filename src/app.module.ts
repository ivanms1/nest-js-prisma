import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { PlaylistService } from './playlist.service';
import { PlaylistTrackService } from './playlistTrack.service';
import { PrismaService } from './prisma.service';
import { TrackService } from './track.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    TrackService,
    PlaylistService,
    PlaylistTrackService,
    PrismaService,
  ],
})
export class AppModule {}
