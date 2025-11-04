import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
export const PlaylistModal = ({ tracks }) => {
    const [uris, SetUris] = useState([]);
    const [playlistURL, setPlaylistURL] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const aux = [];
        tracks?.forEach((element) => aux.push(element.uri));
        SetUris([...aux]);
    }, []);
    useEffect(() => {
        if (!uris || uris.length === 0)
            return;
        if (uris.length !== tracks?.length)
            return;
        const generatePlaylist = async () => {
            try {
                setLoading(true);
                const response = await fetch("/api/getPlaylistURL", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(uris),
                });
                if (response.ok) {
                    const data = await response.text();
                    setPlaylistURL(data);
                }
                else {
                    console.error("Error generando playlist:", response.status);
                }
            }
            catch (err) {
                console.error("Error en generatePlaylist:", err);
            }
            finally {
                setLoading(false);
            }
        };
        generatePlaylist();
    }, [uris]);
    return (_jsx(motion.div, { className: "fixed inset-0 bg-gradient-to-b from-black/80 via-[#0b0f1a]/90 to-black/80 backdrop-blur-md flex justify-center items-center z-50", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsxs(motion.div, { className: "relative bg-gradient-to-b from-[#101520] via-[#0d0f16] to-[#090a10] rounded-2xl max-w-md w-11/12 max-h-[80%] p-6 flex flex-col gap-4 shadow-2xl border border-white/10", initial: { y: 40, opacity: 0 }, animate: { y: 0, opacity: 1 }, exit: { y: 20, opacity: 0 }, transition: { type: "spring", stiffness: 240, damping: 22 }, children: [_jsx("div", { className: "absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-500/20 blur-[100px] rounded-full pointer-events-none" }), _jsxs("div", { className: "text-center z-10", children: [_jsx("h2", { className: "text-white text-2xl font-bold mb-1", children: "\u2728 \u00A1Tu playlist estelar est\u00E1 lista!" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Hemos generado una playlist basada en tu energ\u00EDa musical." })] }), _jsx("div", { className: "overflow-y-auto max-h-72 flex flex-col gap-2 pr-1 z-10", children: tracks?.map((song, index) => (_jsxs("div", { className: "flex items-center justify-between p-2 rounded-lg hover:bg-white/5 transition group", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("img", { src: song.album?.images?.[0]?.url ?? "/placeholder.png", className: "w-12 h-12 rounded-md shadow-md object-cover" }), _jsxs("div", { children: [_jsx("h3", { className: "text-white text-sm font-semibold leading-tight", children: song.name }), _jsx("p", { className: "text-gray-400 text-xs", children: song.artists?.[0]?.name ?? "Artista desconocido" })] })] }), _jsx("span", { className: "text-gray-500 text-xs font-mono group-hover:text-gray-300 transition", children: song.duration_ms })] }, index))) }), _jsx(motion.a, { whileHover: { scale: playlistURL && !loading ? 1.03 : 1 }, whileTap: { scale: playlistURL && !loading ? 0.97 : 1 }, href: playlistURL || "#", target: "_blank", rel: "noopener noreferrer", className: `flex items-center justify-center gap-2 mt-5 self-center font-semibold rounded-full px-6 py-2 transition-all shadow-lg shadow-green-500/20 z-10
            ${loading
                        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                        : "bg-green-500 hover:bg-green-400 active:bg-green-600 text-black"}`, children: loading ? (_jsxs(_Fragment, { children: [_jsx(motion.div, { animate: { rotate: 360 }, transition: { repeat: Infinity, duration: 1, ease: "linear" }, children: _jsx(Loader2, { size: 18 }) }), "Generando playlist..."] })) : (_jsxs(_Fragment, { children: [_jsx(ExternalLink, { size: 18 }), "Obtener playlist en Spotify"] })) }), _jsx("button", { className: "self-center mt-1 text-gray-400 hover:text-white text-sm transition", onClick: () => {
                        window.location.reload();
                    }, children: "Cerrar" })] }) }));
};
