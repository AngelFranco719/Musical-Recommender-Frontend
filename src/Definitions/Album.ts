import type { SimplifiedArtist } from "./Artist";
import type { Image } from "./Image";
import type { Restriction } from "./Restriction";
import type { SpotifyBaseObject } from "./SpotifyBaseObject";
import type { Tracks } from "./Track";

type AlbumTypes = "album" | "single" | "compilation";

export interface Album extends SpotifyBaseObject {
  album_type: AlbumTypes;
  total_tracks: number;
  available_markets: string[];
  images: Image[];
  release_date: string;
  release_date_precision: string;
  restrictions: Restriction | null;
  artists: SimplifiedArtist[];
  tracks: Tracks | null;
  popularity: number;
  label: string | null;
}
