import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Track, Prisma } from '@prisma/client';

@Injectable()
export class TrackService {
  constructor(private prisma: PrismaService) {}

  async track(name: string): Promise<Track | null> {
    return this.prisma.track.findFirst({
      where: {
        name,
      },
    });
  }

  async tracks(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TrackWhereUniqueInput;
    where?: Prisma.TrackWhereInput;
    orderBy?: Prisma.TrackOrderByInput;
  }): Promise<Track[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.track.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }
}
