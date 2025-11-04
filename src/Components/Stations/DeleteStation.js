import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export const DeleteStation = (props) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 10);
        return () => clearTimeout(timeout);
    }, []);
    const handleClose = (confirm) => {
        setIsClosing(true);
        setIsVisible(false);
        setTimeout(() => {
            if (confirm)
                props.setDeleteStation(props.station);
            props.setDeleteState(false);
        }, 300);
    };
    return (_jsx("div", { className: `
        flex fixed inset-0 z-50 items-center justify-center
        transition-opacity duration-300 ease-in-out
        ${isVisible && !isClosing ? "opacity-100" : "opacity-0"}
        bg-black/70
      `, children: _jsxs("div", { className: `
          flex flex-col h-[35vh] md:h-[40vh] w-[90%]
          bg-carbonite-gray rounded-lg p-[8%] gap-5 justify-center
          transform transition-all duration-300 ease-in-out
          ${isVisible && !isClosing ? "scale-100" : "scale-90"}
        `, children: [_jsxs("div", { className: "h-[35%] flex gap-5 justify-center items-center", children: [_jsx("img", { src: props.station.track.album?.images[0].url, className: "h-full rounded-lg" }), _jsxs("div", { className: "h-[25%] w-full flex flex-col justify-center", children: [_jsx("h1", { className: "text-white font-Quicksand text-[1.1em]", children: props.station.track.name }), _jsx("h1", { className: "text-white font-Quicksand text-[0.9em]", children: props.station.track.artists[0].name })] })] }), _jsx("h1", { className: "text-white font-MPLUSRounded1c text-[1em] text-center", children: "\u00BFQuieres eliminar la estaci\u00F3n?" }), _jsxs("div", { className: "flex justify-center items-center gap-5 h-[25%]", children: [_jsx("button", { className: "\r\n              w-[40%] h-[60%] bg-[#158C33] rounded-lg text-white\r\n              font-MPLUSRounded1c shadow-md\r\n            ", style: {
                                boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                                textShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                            }, onClick: () => handleClose(true), children: "Aceptar" }), _jsx("button", { className: "\r\n              w-[40%] h-[60%] bg-[#050505] rounded-lg text-white\r\n              font-MPLUSRounded1c shadow-md\r\n            ", style: {
                                boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                            }, onClick: () => handleClose(false), children: "Cancelar" })] })] }) }));
};
