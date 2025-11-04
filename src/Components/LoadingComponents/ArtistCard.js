import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
export const ArtistCard = (props) => {
    return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: "easeOut" }, className: "flex items-center gap-4 p-3 bg-neutral-900/80 rounded-2xl shadow-md border border-neutral-800 w-full max-w-md", children: [_jsx("div", { className: "w-14 h-14 rounded-full overflow-hidden bg-neutral-800 flex-shrink-0", children: _jsx("img", { src: props.img_url ? props.img_url : "", alt: "Artist", className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "flex flex-col w-[60%]", children: [_jsx("span", { className: "text-white font-semibold truncate", children: props.name }), _jsx(motion.span, { animate: { opacity: [0.6, 1, 0.6] }, transition: {
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }, className: "text-neutral-400 text-sm", children: "Explorando..." })] })] }));
};
