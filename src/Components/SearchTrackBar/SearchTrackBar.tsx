import React, { useEffect, useState } from "react";
import "./SearchTrackBar.css";
import { useFetch } from "../../useFetch";
import type { QueryResult } from "../../Definitions/QueryResult";

interface searchBarProps {
  setTracksResult: React.Dispatch<React.SetStateAction<QueryResult | null>>;
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchTrackBar = (props: searchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const { data, loading, error, refetch } = useFetch<QueryResult>(
    query
      ? `https://spotify-backend.agreeablemushroom-8c2dff51.westus2.azurecontainerapps.io/api/SearchTrackByQuery?query=${query}`
      : null,
    {},
    false
  );

  useEffect(() => {
    data ? props.setTracksResult(data) : {};
  }, [data]);

  return (
    <>
      <div
        className="bg-white 
      w-1/1 
      h-1/15
      rounded-sm
      flex
      px-[2%]
      shadow-lg
    shadow-white/20
      "
      >
        <img
          className="p-[3%]"
          src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-9.png"
        />
        <input
          type="text"
          placeholder="¿Qué deseas escuchar?"
          className="font-MPLUSRounded1c
            px-[2%]
            w-full
            focus:outline-none
          "
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              props.setSearchState(true);
              refetch();
            }
          }}
        />
      </div>
    </>
  );
};
