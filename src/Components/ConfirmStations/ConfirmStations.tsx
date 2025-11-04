import { useState } from "react";
import { STATION_COLORS, type Station } from "../../Definitions/NewTrack";
import type { Track } from "../../Definitions/Track";
import { motion, AnimatePresence } from "framer-motion";

interface ConfirmTrackDialogProps {
  setCreatePlaylist: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirmDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConfirmStationsDialog = (props: ConfirmTrackDialogProps) => {
  const [duration, setDuration] = useState<string>("");
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="
            flex
            fixed
            inset-0
            bg-black/70
            z-50
            items-center
            justify-center
            backdrop-blur-sm
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="
              flex
              flex-col
              h-[30vh]
              md:h-[30vh]
              w-[90%]
              bg-carbonite-gray
              rounded-lg
              p-[8%]
              gap-5
              shadow-xl
            "
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            exit={{
              scale: 0.85,
              opacity: 0,
              y: 20,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <div className="h-[25%] flex gap-5 justify-center items-center">
              <h1 className="text-white font-Quicksand text-[1.1em] text-center">
                ¿Estás seguro de que quieres generar esta playlist?
              </h1>
            </div>

            <div className="flex justify-center items-center gap-5 h-[50%]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-[40%]
                  h-[60%]
                  bg-[#158C33]
                  rounded-lg
                  text-white
                  font-MPLUSRounded1c
                "
                style={{
                  boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                  textShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                }}
                onClick={handleAccept}
              >
                Aceptar
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-[40%]
                  h-[60%]
                  bg-[#050505]
                  rounded-lg
                  text-white
                  font-MPLUSRounded1c
                "
                style={{
                  boxShadow: "3px 3px 4px rgba(0,0,0,0.6)",
                }}
                onClick={handleClose}
              >
                Cancelar
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
