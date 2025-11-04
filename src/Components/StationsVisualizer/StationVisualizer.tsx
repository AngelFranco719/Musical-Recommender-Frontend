import React, { useEffect, useState } from "react";
import { type Station as StationType } from "../../Definitions/NewTrack";
import { Station } from "../Stations/Station";
import "./StationVisualizer.css";

interface propsStationVisualizer {
  stations: StationType[];
  setStations: React.Dispatch<React.SetStateAction<StationType[]>>;
}

export const StationVisualizer = (props: propsStationVisualizer) => {
  const [deletedStation, setDeletedStation] = useState<StationType>();

  useEffect(() => {
    if (deletedStation) {
      const index = props.stations.indexOf(deletedStation);
      if (index !== -1) {
        const aux = [...props.stations];
        aux.splice(index, 1);
        props.setStations([...aux]);
        setDeletedStation(undefined);
      }
    }
  }, [deletedStation]);

  useEffect(() => {
    if (deletedStation) {
      console.log(`borro a ${deletedStation.track.name}`);
    }
  }, [deletedStation]);
  return (
    <>
      <div className="h-[65%] w-full flex flex-col gap-4 backdrop-blur-sm">
        <h2 className="text-white text-xl font-MPLUSRounded1c font-bold tracking-wide">
          Paradas 🪐
        </h2>

        <div
          className="
      flex flex-col gap-4 overflow-y-auto w-full h-full p-3
      rounded-xl bg-white/5 border border-white/10 shadow-inner shadow-black/30
      scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
    "
        >
          {props.stations?.map((station, index) => (
            <Station
              key={index}
              station={station}
              setDeletedStation={setDeletedStation}
            />
          ))}
        </div>
      </div>
    </>
  );
};
