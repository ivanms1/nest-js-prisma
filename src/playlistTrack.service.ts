import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PlaylistTrack } from '@prisma/client';

@Injectable()
export class PlaylistTrackService {
  constructor(private prisma: PrismaService) {}

  async playlistTrack(
    playlistTitle: string,
    trackTitle: string,
  ): Promise<PlaylistTrack | null> {
    return this.prisma.playlistTrack.findFirst({
      where: {
        playlist: {
          name: playlistTitle,
        },
        track: {
          name: trackTitle,
        },
      },
    });
  }
}
