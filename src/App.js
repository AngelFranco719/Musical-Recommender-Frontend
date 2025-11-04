import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import { SearchTrackBar } from "./Components/SearchTrackBar/SearchTrackBar";
import { StationVisualizer } from "./Components/StationsVisualizer/StationVisualizer";
import { LoadingScreen } from "./Components/LoadingComponents/LoadingScreen";
import { SearchResultsMenu } from "./Components/SearchResultsMenu/SearchResultsMenu";
import { ConfirmStationsDialog } from "./Components/ConfirmStations/ConfirmStations";
function App() {
    const [resultTracks, setResultTracks] = useState(null);
    const [stationList, setStationList] = useState([]);
    const [searchState, setSearchState] = useState(false);
    const [confirmDialog, setConfirmDialog] = useState(false);
    const [creatingPlaylist, setCreatingPlaylist] = useState(false);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "\n    relative w-screen h-screen \n    bg-gradient-to-b\n    from-[#0b0f1a] via-[#101820] to-[#090a10]\n    overflow-hidden\n    flex flex-col items-center pt-[5%] px-[5%]\n  ", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-[10%] left-[30%] w-80 h-80 bg-fuchsia-600/10 blur-[100px] rounded-full" }), _jsx("div", { className: "absolute bottom-[10%] right-[25%] w-96 h-96 bg-green-500/10 blur-[120px] rounded-full" })] }), _jsxs("div", { className: "relative z-10 flex flex-col gap-5 h-[85%] w-full items-center", children: [_jsx("h1", { className: "text-white text-2xl font-MPLUSRounded1c font-bold drop-shadow-lg", children: "Elige tus Estaciones \uD83D\uDE80" }), _jsx(SearchTrackBar, { setTracksResult: setResultTracks, setSearchState: setSearchState }), searchState && resultTracks ? (_jsx(SearchResultsMenu, { results: resultTracks, setStationList: setStationList, stationList: stationList, setSearchState: setSearchState })) : null, creatingPlaylist ? (_jsx(LoadingScreen, { stations: stationList })) : confirmDialog ? (_jsx(ConfirmStationsDialog, { setConfirmDialog: setConfirmDialog, setCreatePlaylist: setCreatingPlaylist })) : (_jsx(StationVisualizer, { setStations: setStationList, stations: stationList })), _jsx("button", { className: "\n        mt-auto text-white text-lg tracking-wide\n        bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400\n        hover:from-green-300 hover:via-emerald-400 hover:to-lime-300\n        font-Quicksand font-bold rounded-full px-10 py-3\n        shadow-[0_0_25px_rgba(34,197,94,0.3)]\n        transition-all duration-300 transform hover:scale-105\n      ", onClick: () => setConfirmDialog(true), children: "Generar viaje estelar \uD83C\uDF0C" })] })] }) }));
}
export default App;
