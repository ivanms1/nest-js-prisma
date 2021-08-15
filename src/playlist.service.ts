import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Playlist, Prisma } from '@prisma/client';

@Injectable()
export class PlaylistService {
  constructor(private prisma: PrismaService) {}

  async playlist(name: string): Promise<Playlist | null> {
    return this.prisma.playlist.findFirst({
      where: {
        name,
      },
      include: {
        _count: {
          select: {
            tracks: true,
          },
        },
      },
    });
  }

  async createPlaylist(data: Prisma.PlaylistCreateInput): Promise<Playlist> {
    return this.prisma.playlist.create({ data });
  }
}
