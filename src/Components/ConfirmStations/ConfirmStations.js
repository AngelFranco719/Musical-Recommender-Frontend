import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export const ConfirmStationsDialog = (props) => {
    const [duration, setDuration] = useState("");
    const [isVisible, setIsVisible] = useState(true);
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => props.setConfirmDialog(false), 200);
    };
    const handleAccept = () => {
        setIsVisible(false);
        setTimeout(() => {
            props.setConfirmDialog(false);
            props.setCreatePlaylist(true);
        }, 200);
    };
    return (_jsx(AnimatePresence, { children: isVisible && (_jsx(motion.div, { className: "\r\n            flex\r\n            fixed\r\n            inset-0\r\n            bg-black/70\r\n            z-50\r\n            items-center\r\n            justify-center\r\n            backdrop-blur-sm\r\n          ", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.25 }, children: _jsxs(motion.div, { className: "\r\n              flex\r\n              flex-col\r\n              h-[30vh]\r\n              md:h-[30vh]\r\n              w-[90%]\r\n              bg-carbonite-gray\r\n              rounded-lg\r\n              p-[8%]\r\n              gap-5\r\n              shadow-xl\r\n            ", initial: { scale: 0.85, opacity: 0, y: 30 }, animate: {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.35, ease: "easeOut" },
                }, exit: {
                    scale: 0.85,
                    opacity: 0,
                    y: 20,
                    transition: { duration: 0.2, ease: "easeInOut" },
                }, children: [_jsx("div", { className: "h-[25%] flex gap-5 justify-center items-center", children: _jsx("h1", { className: "text-white font-Quicksand text-[1.1em] text-center", children: "\u00BFEst\u00E1s seguro de que quieres generar esta playlist?" }) }), _jsxs("div", { className: "flex justify-center items-center gap-5 h-[50%]", children: [_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "\r\n                  w-[40%]\r\n                  h-[60%]\r\n                  bg-[#158C33]\r\n                  rounded-lg\r\n                  text-white\r\n                  font-MPLUSRounded1c\r\n                ", style: {
                                    boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                                    textShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                                }, onClick: handleAccept, children: "Aceptar" }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "\r\n                  w-[40%]\r\n                  h-[60%]\r\n                  bg-[#050505]\r\n                  rounded-lg\r\n                  text-white\r\n                  font-MPLUSRounded1c\r\n                ", style: {
                                    boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                                }, onClick: handleClose, children: "Cancelar" })] })] }) })) }));
};
