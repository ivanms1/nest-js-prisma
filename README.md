## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Endpoints:

- Get Track entity by name

  `/track/:name`

- Get PlaylistTrack entity by playlist name & track name

  `/playlist-track/:playlist/:track`

- Get number of tracks for a playlist name

  `/get-playlist-track-count/:name`
