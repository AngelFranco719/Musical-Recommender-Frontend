import type { ExternalURLS } from "./ExternalURLS";

export interface SpotifyBaseObject {
  external_urls: ExternalURLS;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}
