import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { STATION_COLORS } from "../../Definitions/NewTrack";
import { motion, AnimatePresence } from "framer-motion";
export const ConfirmTrackDialog = (props) => {
    const [duration, setDuration] = useState("");
    const [isVisible, setIsVisible] = useState(true); // controla la salida animada
    const handleClose = () => {
        setIsVisible(false);
        // espera la animación de salida (200 ms) antes de desmontar
        setTimeout(() => props.setConfirmWindowState(false), 200);
    };
    const handleAccept = () => {
        setIsVisible(false);
        setTimeout(() => {
            props.setConfirmWindowState(false);
            props.setConfirmed(true);
            try {
                const newDuration = Number(duration);
                const newStation = {
                    duration: newDuration,
                    track: props.song,
                    colors: STATION_COLORS[Math.floor(Math.random() * STATION_COLORS.length)],
                };
                const list = [...props.stationList];
                list.push(newStation);
                props.setStationList(list);
            }
            catch (error) {
                console.log(error);
            }
        }, 200);
    };
    return (_jsx(AnimatePresence, { children: isVisible && (_jsx(motion.div, { className: "\r\n            flex\r\n            fixed\r\n            inset-0\r\n            bg-black/70\r\n            z-50\r\n            items-center\r\n            justify-center\r\n            backdrop-blur-sm\r\n          ", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.25 }, children: _jsxs(motion.div, { className: "\r\n              flex\r\n              flex-col\r\n              h-[45vh]\r\n              md:h-[40vh]\r\n              w-[90%]\r\n              bg-carbonite-gray\r\n              rounded-lg\r\n              p-[8%]\r\n              gap-5\r\n              shadow-xl\r\n            ", initial: { scale: 0.85, opacity: 0, y: 30 }, animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, ease: "easeOut" },
                }, exit: {
                    scale: 0.85,
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.2, ease: "easeInOut" },
                }, children: [_jsxs("div", { className: "h-[25%] flex gap-5 justify-center items-center", children: [_jsx("img", { src: props.song.album?.images[0].url, className: "h-full rounded-lg" }), _jsxs("div", { className: "h-[25%] w-full flex flex-col justify-center", children: [_jsx("h1", { className: "text-white font-Quicksand text-[1.1em]", children: props.song.name }), _jsx("h1", { className: "text-white font-Quicksand text-[0.9em]", children: props.song.artists[0].name })] })] }), _jsx("h1", { className: "text-white font-Roboto text-[1em]", children: "\u00BFCu\u00E1nto tiempo quieres pasar en esta estaci\u00F3n? \uD83D\uDC7D" }), _jsxs("div", { className: "flex gap-5 text-white font-Quicksand justify-center", children: [_jsx("input", { className: "\r\n                  w-[30%]\r\n                  bg-white\r\n                  text-black\r\n                  p-[2%]\r\n                  text-[0.8em]\r\n                  rounded-sm\r\n                  text-center\r\n                ", placeholder: "(15-120)", onChange: (e) => setDuration(e.target.value) }), _jsx("label", { children: "minutos" })] }), _jsxs("div", { className: "flex justify-center items-center gap-5 h-[25%]", children: [_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "\r\n                  w-[40%]\r\n                  h-[60%]\r\n                  bg-[#158C33]\r\n                  rounded-lg\r\n                  text-white\r\n                  font-MPLUSRounded1c\r\n                ", style: {
                                    boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                                    textShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                                }, onClick: handleAccept, children: "Aceptar" }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "\r\n                  w-[40%]\r\n                  h-[60%]\r\n                  bg-[#050505]\r\n                  rounded-lg\r\n                  text-white\r\n                  font-MPLUSRounded1c\r\n                ", style: {
                                    boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                                }, onClick: handleClose, children: "Cancelar" })] })] }) })) }));
};
