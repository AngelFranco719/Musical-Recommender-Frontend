import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { CirclePlus, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { ConfirmTrackDialog } from "../ConfirmTrackDialog/ConfirmTrackDialog";
import { motion, AnimatePresence } from "framer-motion";
export const Result = (props) => {
    const [selected, setSelected] = useState(false);
    const [confirmWindowState, setConfirmWindowState] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        if (confirmed) {
            const timeout = setTimeout(() => {
                props.setSearchState(false);
            }, 800);
            return () => clearTimeout(timeout);
        }
    }, [confirmed]);
    return (_jsxs(_Fragment, { children: [" ", confirmWindowState && (_jsx(ConfirmTrackDialog, { song: props.result, setConfirmWindowState: setConfirmWindowState, setConfirmed: setConfirmed, setStationList: props.setStationList, stationList: props.stationList }, props.result.id)), " ", _jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: imageLoaded
                    ? {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.4, ease: "easeOut" },
                    }
                    : {}, className: " w-full h-[15%] flex gap-3 p-[3%] items-center ", children: [" ", _jsx("img", { className: "rounded-lg object-cover h-[80%]", src: props.result.album?.images[0].url || "", onLoad: () => setImageLoaded(true), onError: () => setImageLoaded(true) }), " ", _jsxs("div", { className: "flex flex-col w-full h-full justify-center max-w-[60%]", children: [" ", _jsxs("h1", { className: "text-white font-Quicksand truncate", children: [" ", props.result.name, " "] }), " ", _jsxs("h1", { className: "text-white truncate font-Quicksand", children: [" ", props.result.artists[0].name, " "] }), " "] }), " ", _jsxs("div", { className: "flex items-center justify-center h-full w-[25%]", children: [" ", _jsxs(AnimatePresence, { mode: "wait", initial: false, children: [" ", confirmed ? (_jsxs(motion.div, { initial: { scale: 0, opacity: 0, rotate: -90 }, animate: { scale: 1, opacity: 1, rotate: 0 }, exit: { scale: 0, opacity: 0, rotate: 90 }, transition: { duration: 0.3, ease: "easeOut" }, children: [" ", _jsx(Check, { className: "bg-green-400 text-black rounded-sm cursor-pointer", onClick: () => setConfirmed(false) }), " "] }, "check")) : (_jsxs(motion.div, { initial: { scale: 0, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0, opacity: 0 }, transition: { duration: 0.2 }, children: [" ", _jsx(CirclePlus, { onClick: () => {
                                                    setSelected(true);
                                                    setConfirmWindowState(true);
                                                }, className: "text-white/70 cursor-pointer" }), " "] }, "plus")), " "] }), " "] }), " "] }), " "] }));
};
