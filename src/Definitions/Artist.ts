import type { Followers } from "./Followers";
import type { Image } from "./Image";
import type { SpotifyBaseObject } from "./SpotifyBaseObject";

export interface Artist extends SpotifyBaseObject {
  followers: Followers;
  genres: string[];
  images: Image[];
  popularity: number;
}

export interface SimplifiedArtist extends SpotifyBaseObject {}
