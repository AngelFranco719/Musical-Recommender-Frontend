import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { SocketProvider } from "./useProgressSocket";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(SocketProvider, { children: _jsx(App, {}) }) }));
