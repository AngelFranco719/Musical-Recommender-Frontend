import { CirclePlus, Check } from "lucide-react";
import type { Track } from "../../Definitions/Track";
import { useEffect, useState } from "react";
import { ConfirmTrackDialog } from "../ConfirmTrackDialog/ConfirmTrackDialog";
import type { Station } from "../../Definitions/NewTrack";
import { motion, AnimatePresence } from "framer-motion";
interface resultProps {
  result: Track;
  setStationList: React.Dispatch<React.SetStateAction<Station[]>>;
  stationList: Station[];
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Result = (props: resultProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [confirmWindowState, setConfirmWindowState] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (confirmed) {
      const timeout = setTimeout(() => {
        props.setSearchState(false);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [confirmed]);
  return (
    <>
      {" "}
      {confirmWindowState && (
        <ConfirmTrackDialog
          key={props.result.id}
          song={props.result}
          setConfirmWindowState={setConfirmWindowState}
          setConfirmed={setConfirmed}
          setStationList={props.setStationList}
          stationList={props.stationList}
        />
      )}{" "}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={
          imageLoaded
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: "easeOut" },
              }
            : {}
        }
        className=" w-full h-[15%] flex gap-3 p-[3%] items-center "
      >
        {" "}
        <img
          className="rounded-lg object-cover h-[80%]"
          src={props.result.album?.images[0].url || ""}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />{" "}
        <div className="flex flex-col w-full h-full justify-center max-w-[60%]">
          {" "}
          <h1 className="text-white font-Quicksand truncate">
            {" "}
            {props.result.name}{" "}
          </h1>{" "}
          <h1 className="text-white truncate font-Quicksand">
            {" "}
            {props.result.artists[0].name}{" "}
          </h1>{" "}
        </div>{" "}
        <div className="flex items-center justify-center h-full w-[25%]">
          {" "}
          <AnimatePresence mode="wait" initial={false}>
            {" "}
            {confirmed ? (
              <motion.div
                key="check"
                initial={{ scale: 0, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {" "}
                <Check
                  className="bg-green-400 text-black rounded-sm cursor-pointer"
                  onClick={() => setConfirmed(false)}
                />{" "}
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {" "}
                <CirclePlus
                  onClick={() => {
                    setSelected(true);
                    setConfirmWindowState(true);
                  }}
                  className="text-white/70 cursor-pointer"
                />{" "}
              </motion.div>
            )}{" "}
          </AnimatePresence>{" "}
        </div>{" "}
      </motion.div>{" "}
    </>
  );
};
