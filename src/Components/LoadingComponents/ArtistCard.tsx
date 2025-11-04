import { motion } from "framer-motion";

interface propsArtistCard {
  name: string;
  img_url: string | null;
}

export const ArtistCard = (props: propsArtistCard) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center gap-4 p-3 bg-neutral-900/80 rounded-2xl shadow-md border border-neutral-800 w-full max-w-md"
    >
      <div className="w-14 h-14 rounded-full overflow-hidden bg-neutral-800 flex-shrink-0">
        <img
          src={props.img_url ? props.img_url : ""}
          alt="Artist"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col w-[60%]">
        <span className="text-white font-semibold truncate">{props.name}</span>
        <motion.span
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-neutral-400 text-sm"
        >
          Explorando...
        </motion.span>
      </div>
    </motion.div>
  );
};
