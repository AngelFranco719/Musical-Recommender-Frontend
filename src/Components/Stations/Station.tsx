import { useEffect, useState } from "react";
import type { Station as TypeStation } from "../../Definitions/NewTrack";
import { DeleteStation } from "./DeleteStation";

interface StationProps {
  station: TypeStation;
  setDeletedStation: React.Dispatch<
    React.SetStateAction<TypeStation | undefined>
  >;
}

export const Station = (props: StationProps) => {
  const [deleteState, setDeleteState] = useState<boolean>(false);
  const [selectedTrack, setSelectedTrack] = useState<TypeStation>();

  useEffect(() => {
    if (deleteState) console.log("Borro");
  }, [deleteState]);

  return (
    <>
      <div
        className="
    relative w-full min-h-[6rem]
    rounded-xl flex items-center justify-between
    overflow-hidden cursor-pointer transition-all duration-300
    hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
  "
        style={{
          background: `linear-gradient(135deg, ${props.station.colors.primary} 0%, ${props.station.colors.secondary} 100%)`,
          boxShadow: `0 0 20px ${props.station.colors.primary}55`,
        }}
        onClick={() => {
          setDeleteState(true);
          setSelectedTrack(props.station);
        }}
      >
        <div
          className="flex flex-col justify-center flex-1 pl-4
        w-[65%]"
        >
          <h2
            className="text-white text-base font-bold truncate max-w-[90%] drop-shadow-md
          truncate"
          >
            {props.station.track.name}
          </h2>

          <div className="flex items-center gap-3 mt-1">
            <div className="bg-black/40 px-2 py-1 rounded-lg">
              <span className="text-white/80 text-xs">
                {props.station.duration} min
              </span>
            </div>
            <span className="text-white text-sm truncate max-w-[60%] opacity-90">
              {props.station.track.artists[0].name}
            </span>
          </div>
        </div>

        <div className="h-24 w-24 p-2 shrink-0">
          <img
            className="rounded-xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            src={props.station.track.album?.images[0]?.url || ""}
            alt={props.station.track.name}
          />
        </div>

        <div className="absolute -inset-1 rounded-xl bg-white/10 blur-md opacity-0 group-hover:opacity-20 transition" />
      </div>

      {deleteState && selectedTrack ? (
        <>
          <DeleteStation
            setDeleteState={setDeleteState}
            setDeleteStation={props.setDeletedStation}
            station={selectedTrack}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
