import { Controller, Get, Param } from '@nestjs/common';

import { PlaylistService } from './playlist.service';
import { PlaylistTrackService } from './playlistTrack.service';
import { TrackService } from './track.service';

import {
  Track as TrackModel,
  Playlist as PlaylistModel,
  PlaylistTrack as PlaylistTrackModel,
} from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly trackService: TrackService,
    private readonly playlistService: PlaylistService,
    private readonly playlistTrackService: PlaylistTrackService,
  ) {}

  @Get('track/:name')
  async getTrackByName(@Param('name') name: string): Promise<TrackModel> {
    const result = await this.trackService.track(name);
    return result;
  }

  @Get('playlist-track/:playlist/:track')
  async getPlaylistTrack(
    @Param('playlist') playlistName: string,
    @Param('track') trackName: string,
  ): Promise<PlaylistTrackModel> {
    return this.playlistTrackService.playlistTrack(playlistName, trackName);
  }

  @Get('get-playlist-track-count/:name')
  async getPlaylistTrackCount(
    @Param('name') name: string,
  ): Promise<PlaylistModel> {
    return this.playlistService.playlist(name);
  }
}
