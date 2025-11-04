import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "./SearchTrackBar.css";
import { useFetch } from "../../useFetch";
export const SearchTrackBar = (props) => {
    const [query, setQuery] = useState("");
    const { data, loading, error, refetch } = useFetch(query ? `/api/SearchTrackByQuery?query=${query}` : null, {}, false);
    useEffect(() => {
        data ? props.setTracksResult(data) : {};
    }, [data]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "bg-white \r\n      w-1/1 \r\n      h-1/15\r\n      rounded-sm\r\n      flex\r\n      px-[2%]\r\n      shadow-lg\r\n    shadow-white/20\r\n      ", children: [_jsx("img", { className: "p-[3%]", src: "https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-9.png" }), _jsx("input", { type: "text", placeholder: "\u00BFQu\u00E9 deseas escuchar?", className: "font-MPLUSRounded1c\r\n            px-[2%]\r\n            w-full\r\n            focus:outline-none\r\n          ", onChange: (e) => {
                        setQuery(e.target.value);
                    }, onKeyDown: (e) => {
                        if (e.key === "Enter") {
                            props.setSearchState(true);
                            refetch();
                        }
                    } })] }) }));
};
