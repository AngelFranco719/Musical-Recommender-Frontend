import type { ExternalURLS } from "./ExternalURLS";
import type { SpotifyBaseObject } from "./SpotifyBaseObject";

export interface LinkedFrom {
  spotifyBaseObject: SpotifyBaseObject;
  external_urls: ExternalURLS;
}
