import type { Album } from "./Album";
import type { SimplifiedArtist } from "./Artist";
import type { External_IDs } from "./External_IDs";
import type { ExternalURLS } from "./ExternalURLS";
import type { LinkedFrom } from "./LinkedFrom";
import type { Restriction } from "./Restriction";
import type { SpotifyBaseObject } from "./SpotifyBaseObject";

export interface Track extends SpotifyBaseObject {
  album: Album | null;
  artists: SimplifiedArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: External_IDs;
  is_playable: boolean;
  linked_from: Track;
  restrictions: Restriction | null;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  is_local: boolean;
}

export interface SimplifiedTrack extends SpotifyBaseObject {
  artists: SimplifiedArtist[];
  available_markets: string[];
  disc_number: string[];
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalURLS;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restriction: Restriction;
  track_number: number;
  is_local: boolean;
  external_ids: External_IDs;
  genres: string[];
  label: string;
  popularity: number;
}

export interface Tracks {
  album: Album | null;
  artists: SimplifiedArtist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: External_IDs;
  is_playable: boolean;
  linked_from: Track;
  restrictions: Restriction | null;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  is_local: boolean;
}
