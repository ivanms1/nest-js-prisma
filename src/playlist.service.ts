import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PlaylistService {
  constructor(private prisma: PrismaService) {}

  async playlist(name: string): Promise<number | null> {
    try {
      const playlist = await this.prisma.playlist.findFirst({
        where: {
          name,
        },
      });

      if (!playlist) {
        throw new NotFoundException('Playlist not found');
      }

      return playlist?.tracksCount;
    } catch (error) {
      throw new Error(error);
    }
  }
}
