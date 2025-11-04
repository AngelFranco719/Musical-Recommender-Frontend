import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Station } from "../Stations/Station";
import "./StationVisualizer.css";
export const StationVisualizer = (props) => {
    const [deletedStation, setDeletedStation] = useState();
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
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "h-[65%] w-full flex flex-col gap-4 backdrop-blur-sm", children: [_jsx("h2", { className: "text-white text-xl font-MPLUSRounded1c font-bold tracking-wide", children: "Paradas \uD83E\uDE90" }), _jsx("div", { className: "\r\n      flex flex-col gap-4 overflow-y-auto w-full h-full p-3\r\n      rounded-xl bg-white/5 border border-white/10 shadow-inner shadow-black/30\r\n      scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent\r\n    ", children: props.stations?.map((station, index) => (_jsx(Station, { station: station, setDeletedStation: setDeletedStation }, index))) })] }) }));
};
