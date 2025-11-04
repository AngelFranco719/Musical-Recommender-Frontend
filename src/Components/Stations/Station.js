import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { DeleteStation } from "./DeleteStation";
export const Station = (props) => {
    const [deleteState, setDeleteState] = useState(false);
    const [selectedTrack, setSelectedTrack] = useState();
    useEffect(() => {
        if (deleteState)
            console.log("Borro");
    }, [deleteState]);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "\r\n    relative w-full min-h-[6rem]\r\n    rounded-xl flex items-center justify-between\r\n    overflow-hidden cursor-pointer transition-all duration-300\r\n    hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]\r\n  ", style: {
                    background: `linear-gradient(135deg, ${props.station.colors.primary} 0%, ${props.station.colors.secondary} 100%)`,
                    boxShadow: `0 0 20px ${props.station.colors.primary}55`,
                }, onClick: () => {
                    setDeleteState(true);
                    setSelectedTrack(props.station);
                }, children: [_jsxs("div", { className: "flex flex-col justify-center flex-1 pl-4\r\n        w-[65%]", children: [_jsx("h2", { className: "text-white text-base font-bold truncate max-w-[90%] drop-shadow-md\r\n          truncate", children: props.station.track.name }), _jsxs("div", { className: "flex items-center gap-3 mt-1", children: [_jsx("div", { className: "bg-black/40 px-2 py-1 rounded-lg", children: _jsxs("span", { className: "text-white/80 text-xs", children: [props.station.duration, " min"] }) }), _jsx("span", { className: "text-white text-sm truncate max-w-[60%] opacity-90", children: props.station.track.artists[0].name })] })] }), _jsx("div", { className: "h-24 w-24 p-2 shrink-0", children: _jsx("img", { className: "rounded-xl object-cover shadow-[0_0_20px_rgba(0,0,0,0.5)]", src: props.station.track.album?.images[0]?.url || "", alt: props.station.track.name }) }), _jsx("div", { className: "absolute -inset-1 rounded-xl bg-white/10 blur-md opacity-0 group-hover:opacity-20 transition" })] }), deleteState && selectedTrack ? (_jsx(_Fragment, { children: _jsx(DeleteStation, { setDeleteState: setDeleteState, setDeleteStation: props.setDeletedStation, station: selectedTrack }) })) : (_jsx(_Fragment, {}))] }));
};
