import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PlaylistTrack } from '@prisma/client';

@Injectable()
export class PlaylistTrackService {
  constructor(private prisma: PrismaService) {}

  async playlistTrack(
    playlistTitle: string,
    trackTitle: string,
  ): Promise<PlaylistTrack | null> {
    try {
      const playlistTrack = await this.prisma.playlistTrack.findFirst({
        where: {
          playlist: {
            name: playlistTitle,
          },
          track: {
            name: trackTitle,
          },
        },
      });

      if (!playlistTrack) {
        throw new NotFoundException('Playlist track not found');
      }

      return playlistTrack;
    } catch (error) {
      throw new Error(error);
    }
  }
}
