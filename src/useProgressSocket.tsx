import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import * as signalR from "@microsoft/signalr";
import type { Artist } from "./Definitions/Artist";

import { useTransition } from "react";

interface SocketContextProps {
  artistList: Artist[];
  connectionID: string;
  recievedTracks: number;
}

const SocketContext = createContext<SocketContextProps>({
  artistList: [],
  connectionID: "",
  recievedTracks: 0,
});

export const useSocket = () => useContext(SocketContext);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [artistList, setArtistList] = useState<Artist[]>([]);
  const pendingArtistsRef = useRef<Artist[]>([]);
  const [isPending, startTransition] = useTransition();
  const [connectionID, setConnectionID] = useState<string>("");
  const [recievedTracks, setRecievedTracks] = useState<number>(0);

  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://192.168.137.1:5156/progresshub")
      .configureLogging(signalR.LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    const flushArtists = () => {
      if (pendingArtistsRef.current.length > 0) {
        setArtistList((prev) => prev.concat(pendingArtistsRef.current));
        pendingArtistsRef.current = [];
      }
    };

    connection.on("getFeedback", (artists: Artist[]) => {
      console.log(artists);
      startTransition(() => {
        setArtistList(artists);
      });
    });
    connection.on("updateSongsFound", (total: number) => {
      startTransition(() => {
        setRecievedTracks(total);
      });
    });

    connection
      .start()
      .then(() => {
        console.log("Socket conectado");
        if (connection.connectionId) setConnectionID(connection.connectionId);
      })
      .catch((err) => console.error("Error al conectar:", err));

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      flushArtists();
      connection.stop();
      console.log("Socket desconectado");
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{ artistList, connectionID, recievedTracks }}
    >
      {children}
    </SocketContext.Provider>
  );
};
