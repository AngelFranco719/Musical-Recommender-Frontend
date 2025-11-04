import { jsx as _jsx } from "react/jsx-runtime";
import { Result } from "../Results/Result";
import { useState, useEffect } from "react";
export const SearchResultsMenu = (props) => {
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
    return (_jsx("div", { className: `
        fixed z-50 flex justify-center w-full h-full top-[20%]
        transition-opacity duration-300 ease-in-out
        ${isClosing ? "opacity-0" : "opacity-100"}
      `, children: _jsx("div", { className: "\r\n          w-[90%] h-[70%] bg-black opacity-[95%]\r\n          rounded-lg flex flex-col overflow-y-auto\r\n          items-center justify-start p-[2%] relative\r\n        ", style: { boxShadow: "-3px -3px 6px rgba(0,0,0,0.6)" }, children: props.results
                ? props.results.map((result) => (_jsx(Result, { result: result, setStationList: props.setStationList, stationList: props.stationList, setSearchState: props.setSearchState }, result.id)))
                : "" }) }));
};
