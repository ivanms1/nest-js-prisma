import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Track } from '@prisma/client';

@Injectable()
export class TrackService {
  constructor(private prisma: PrismaService) {}

  async track(name: string): Promise<Track | null> {
    try {
      const track = await this.prisma.track.findFirst({
        where: {
          name,
        },
      });

      if (!track) {
        throw new NotFoundException('Track not found');
      }

      return track;
    } catch (error) {
      throw new Error(error);
    }
  }
}
