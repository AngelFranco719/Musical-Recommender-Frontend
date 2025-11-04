import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, useRef, } from "react";
import * as signalR from "@microsoft/signalr";
import { useTransition } from "react";
const SocketContext = createContext({
    artistList: [],
    connectionID: "",
    recievedTracks: 0,
});
export const useSocket = () => useContext(SocketContext);
export const SocketProvider = ({ children, }) => {
    const [artistList, setArtistList] = useState([]);
    const pendingArtistsRef = useRef([]);
    const [isPending, startTransition] = useTransition();
    const [connectionID, setConnectionID] = useState("");
    const [recievedTracks, setRecievedTracks] = useState(0);
    const timerRef = useRef(null);
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
        connection.on("getFeedback", (artists) => {
            console.log(artists);
            startTransition(() => {
                setArtistList(artists);
            });
        });
        connection.on("updateSongsFound", (total) => {
            startTransition(() => {
                setRecievedTracks(total);
            });
        });
        connection
            .start()
            .then(() => {
            console.log("Socket conectado");
            if (connection.connectionId)
                setConnectionID(connection.connectionId);
        })
            .catch((err) => console.error("Error al conectar:", err));
        return () => {
            if (timerRef.current)
                clearTimeout(timerRef.current);
            flushArtists();
            connection.stop();
            console.log("Socket desconectado");
        };
    }, []);
    return (_jsx(SocketContext.Provider, { value: { artistList, connectionID, recievedTracks }, children: children }));
};
