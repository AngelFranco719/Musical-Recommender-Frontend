import { useEffect, useState } from "react";
import type { Station } from "../../Definitions/NewTrack";
import { MinimalStarfield } from "./Loading";
import { LoadingPanel } from "./Panel";
import type { StationsPetition } from "../../Definitions/StationsPetition";
import { useSocket } from "../../useProgressSocket";
import { useFetch } from "../../useFetch";
import { PlaylistModal } from "../PlaylistResult/PlaylistResult";
import type { Track } from "../../Definitions/Track";

interface propsLoadingScreen {
  stations: Station[];
}

export const LoadingScreen = (props: propsLoadingScreen) => {
  const { artistList, connectionID, recievedTracks } = useSocket();
  const [petitions, setPetitions] = useState<StationsPetition[]>([]);
  const [url, setUrl] = useState<string | null>(null);
  const { data, loading, error } = useFetch<Track[]>(
    url,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(petitions),
    },
    !!url
  );

  useEffect(() => {
    if (props.stations.length > 0) {
      const aux = props.stations.map((el) => ({
        key: el.track.id,
        duration: el.duration,
      }));
      setPetitions(aux);
    }
  }, [props.stations]);

  useEffect(() => {
    if (connectionID)
      setUrl(`https://spotify-backend.agreeablemushroom-8c2dff51.westus2.azurecontainerapps.io/api/PlaylistGenerator?connectionID=${connectionID}`);
  }, [connectionID]);

  useEffect(() => {
    console.log({ data, loading, error });
    if (data) console.log(data[0]);
  }, [data, loading, error]);

  return (
    <div className="w-full h-full">
      <MinimalStarfield />
      {loading ? (
        <LoadingPanel artistList={artistList} totalTracks={recievedTracks} />
      ) : (
        <>{data && !loading ? <PlaylistModal tracks={data} /> : <></>}</>
      )}
      {error && <div>Error: {error}</div>}
    </div>
  );
};
