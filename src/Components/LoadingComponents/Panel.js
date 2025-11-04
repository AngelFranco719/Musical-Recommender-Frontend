import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { LoadingHeader } from "./LoadingHeader";
import { ArtistCard } from "./ArtistCard";
export const LoadingPanel = ({ artistList, totalTracks, }) => {
    const [displayedArtists, setDisplayedArtists] = useState([]);
    const pendingArtistsRef = useRef([]);
    const [songsFound, setSongsFound] = useState(0);
    useEffect(() => {
        if (artistList.length === 0)
            return;
        const newArtists = artistList.filter((a) => !displayedArtists.some((d) => d.name === a.name) &&
            !pendingArtistsRef.current.some((p) => p.name === a.name));
        if (newArtists.length > 0) {
            pendingArtistsRef.current.push(...newArtists);
        }
    }, [artistList, displayedArtists]);
    useEffect(() => {
        const interval = setInterval(() => {
            if (pendingArtistsRef.current.length === 0)
                return;
            const nextBatch = pendingArtistsRef.current.splice(0, Math.floor(Math.random() * (2 - 1 + 1)) + 1);
            setDisplayedArtists((prev) => [...prev, ...nextBatch]);
            setSongsFound((prev) => prev + nextBatch.length);
        }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);
        return () => clearInterval(interval);
    }, []);
    return (_jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-sky-100 font-light", children: [_jsx(LoadingHeader, {}), _jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, className: "text-sky-300 mb-4 text-sm flex items-center gap-1", children: [_jsx("span", { children: "Se han encontrado" }), _jsx(motion.span, { animate: {
                            scale: [1, 1.2, 1],
                            textShadow: [
                                "0px 0px 0px rgba(125, 211, 252, 0)",
                                "0px 0px 8px rgba(125, 211, 252, 0.8)",
                                "0px 0px 0px rgba(125, 211, 252, 0)",
                            ],
                        }, transition: {
                            duration: 1,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                        }, className: "font-semibold text-sky-200 text-base", children: totalTracks }), _jsx("span", { children: "canciones." })] }), _jsx(motion.div, { className: "w-3/4 max-w-lg bg-white/5 border border-sky-400/30 rounded-2xl p-6 shadow-lg backdrop-blur-md overflow-y-auto h-[70%] gap-3", initial: "hidden", animate: "visible", variants: { visible: { transition: { staggerChildren: 0.1 } } }, children: displayedArtists.map((artist, idx) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4 }, children: _jsx(ArtistCard, { name: artist.name, img_url: artist.images?.[0]?.url || "" }) }, idx))) }), _jsx(motion.div, { animate: { opacity: [0.5, 1, 0.5] }, transition: { duration: 2, repeat: Infinity }, className: "mt-8 text-sky-300", children: "Sincronizando con la galaxia..." })] }));
};
