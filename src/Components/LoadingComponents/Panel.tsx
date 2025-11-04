import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { LoadingHeader } from "./LoadingHeader";
import { ArtistCard } from "./ArtistCard";
import type { Artist } from "../../Definitions/Artist";

interface propsLoadingPanel {
  artistList: Artist[];
  totalTracks: number;
}

export const LoadingPanel = ({
  artistList,
  totalTracks,
}: propsLoadingPanel) => {
  const [displayedArtists, setDisplayedArtists] = useState<Artist[]>([]);
  const pendingArtistsRef = useRef<Artist[]>([]);
  const [songsFound, setSongsFound] = useState(0);

  useEffect(() => {
    if (artistList.length === 0) return;

    const newArtists = artistList.filter(
      (a) =>
        !displayedArtists.some((d) => d.name === a.name) &&
        !pendingArtistsRef.current.some((p) => p.name === a.name)
    );

    if (newArtists.length > 0) {
      pendingArtistsRef.current.push(...newArtists);
    }
  }, [artistList, displayedArtists]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (pendingArtistsRef.current.length === 0) return;

      const nextBatch = pendingArtistsRef.current.splice(
        0,
        Math.floor(Math.random() * (2 - 1 + 1)) + 1
      );
      setDisplayedArtists((prev) => [...prev, ...nextBatch]);
      setSongsFound((prev) => prev + nextBatch.length);
    }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-sky-100 font-light">
      <LoadingHeader />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-sky-300 mb-4 text-sm flex items-center gap-1"
      >
        <span>Se han encontrado</span>
        <motion.span
          animate={{
            scale: [1, 1.2, 1],
            textShadow: [
              "0px 0px 0px rgba(125, 211, 252, 0)",
              "0px 0px 8px rgba(125, 211, 252, 0.8)",
              "0px 0px 0px rgba(125, 211, 252, 0)",
            ],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
          className="font-semibold text-sky-200 text-base"
        >
          {totalTracks}
        </motion.span>
        <span>canciones.</span>
      </motion.div>

      <motion.div
        className="w-3/4 max-w-lg bg-white/5 border border-sky-400/30 rounded-2xl p-6 shadow-lg backdrop-blur-md overflow-y-auto h-[70%] gap-3"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {displayedArtists.map((artist, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ArtistCard
              name={artist.name}
              img_url={artist.images?.[0]?.url || ""}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-8 text-sky-300"
      >
        Sincronizando con la galaxia...
      </motion.div>
    </div>
  );
};
