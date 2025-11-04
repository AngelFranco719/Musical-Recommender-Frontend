import type { Station } from "../../Definitions/NewTrack";
import type { QueryResult } from "../../Definitions/QueryResult";
import { Result } from "../Results/Result";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface resultsMenuProps {
  results: QueryResult | null;
  setStationList: React.Dispatch<React.SetStateAction<Station[]>>;
  stationList: Station[];
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchResultsMenu = (props: resultsMenuProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      props.setSearchState(false);
    }, 300);
  };

  useEffect(() => {
    setIsClosing(false);
  }, []);

  return (
    <div
      className={`
        fixed z-50 flex justify-center w-full h-full top-[20%]
        transition-opacity duration-300 ease-in-out
        ${isClosing ? "opacity-0" : "opacity-100"}
      `}
    >
      <div
        className="
          w-[90%] h-[70%] bg-black opacity-[95%]
          rounded-lg flex flex-col overflow-y-auto
          items-center justify-start p-[2%] relative
        "
        style={{ boxShadow: "-3px -3px 6px rgba(0,0,0,0.6)" }}
      >
        {props.results
          ? props.results.map((result) => (
              <Result
                key={result.id}
                result={result}
                setStationList={props.setStationList}
                stationList={props.stationList}
                setSearchState={props.setSearchState}
              />
            ))
          : ""}
      </div>
    </div>
  );
};
