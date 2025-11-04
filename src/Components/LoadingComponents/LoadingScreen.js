import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { MinimalStarfield } from "./Loading";
import { LoadingPanel } from "./Panel";
import { useSocket } from "../../useProgressSocket";
import { useFetch } from "../../useFetch";
import { PlaylistModal } from "../PlaylistResult/PlaylistResult";
export const LoadingScreen = (props) => {
    const { artistList, connectionID, recievedTracks } = useSocket();
    const [petitions, setPetitions] = useState([]);
    const [url, setUrl] = useState(null);
    const { data, loading, error } = useFetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petitions),
    }, !!url);
    useEffect(() => {
        if (props.stations.length > 0) {
            const aux = props.stations.map((el) => ({
                key: el.track.id,
                duration: el.duration,
            }));
            setPetitions(aux);
        }
    }, [props.stations]);
    useEffect(() => {
        if (connectionID)
            setUrl(`/api/PlaylistGenerator?connectionID=${connectionID}`);
    }, [connectionID]);
    useEffect(() => {
        console.log({ data, loading, error });
        if (data)
            console.log(data[0]);
    }, [data, loading, error]);
    return (_jsxs("div", { className: "w-full h-full", children: [_jsx(MinimalStarfield, {}), loading ? (_jsx(LoadingPanel, { artistList: artistList, totalTracks: recievedTracks })) : (_jsx(_Fragment, { children: data && !loading ? _jsx(PlaylistModal, { tracks: data }) : _jsx(_Fragment, {}) })), error && _jsxs("div", { children: ["Error: ", error] })] }));
};
