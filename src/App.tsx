import { useEffect, useState } from "react";
import "./App.css";
import { SearchTrackBar } from "./Components/SearchTrackBar/SearchTrackBar";
import type { QueryResult } from "./Definitions/QueryResult";
import type { Station } from "./Definitions/NewTrack";
import { StationVisualizer } from "./Components/StationsVisualizer/StationVisualizer";
import { MinimalStarfield } from "./Components/LoadingComponents/Loading";
import { LoadingScreen } from "./Components/LoadingComponents/LoadingScreen";
import { SearchResultsMenu } from "./Components/SearchResultsMenu/SearchResultsMenu";
import { ConfirmStationsDialog } from "./Components/ConfirmStations/ConfirmStations";
import { SocketProvider } from "./useProgressSocket";

function App() {
  const [resultTracks, setResultTracks] = useState<QueryResult | null>(null);
  const [stationList, setStationList] = useState<Station[]>([]);
  const [searchState, setSearchState] = useState<boolean>(false);
  const [confirmDialog, setConfirmDialog] = useState<boolean>(false);
  const [creatingPlaylist, setCreatingPlaylist] = useState<boolean>(false);

  return (
    <>
      <div
        className="
    relative w-screen h-screen 
    bg-gradient-to-b
    from-[#0b0f1a] via-[#101820] to-[#090a10]
    overflow-hidden
    flex flex-col items-center pt-[5%] px-[5%]
  "
      >
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[30%] w-80 h-80 bg-fuchsia-600/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-[10%] right-[25%] w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 flex flex-col gap-5 h-[85%] w-full items-center">
          <h1 className="text-white text-2xl font-MPLUSRounded1c font-bold drop-shadow-lg">
            Elige tus Estaciones 🚀
          </h1>

          <SearchTrackBar
            setTracksResult={setResultTracks}
            setSearchState={setSearchState}
          />

          {searchState && resultTracks ? (
            <SearchResultsMenu
              results={resultTracks}
              setStationList={setStationList}
              stationList={stationList}
              setSearchState={setSearchState}
            />
          ) : null}

          {creatingPlaylist ? (
            <LoadingScreen stations={stationList} />
          ) : confirmDialog ? (
            <ConfirmStationsDialog
              setConfirmDialog={setConfirmDialog}
              setCreatePlaylist={setCreatingPlaylist}
            />
          ) : (
            <StationVisualizer
              setStations={setStationList}
              stations={stationList}
            />
          )}

          <button
            className="
        mt-auto text-white text-lg tracking-wide
        bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400
        hover:from-green-300 hover:via-emerald-400 hover:to-lime-300
        font-Quicksand font-bold rounded-full px-10 py-3
        shadow-[0_0_25px_rgba(34,197,94,0.3)]
        transition-all duration-300 transform hover:scale-105
      "
            onClick={() => setConfirmDialog(true)}
          >
            Generar viaje estelar 🌌
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
