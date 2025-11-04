import type { Track } from "./Track";

export interface Station {
  track: Track;
  duration: number;
  colors: ColorPair;
}

interface ColorPair {
  primary: string;
  secondary: string;
}

export const STATION_COLORS: ColorPair[] = [
  { primary: "#AD2B55", secondary: "#FF4040" },
  { primary: "#006E13", secondary: "#3DF26B" },
  { primary: "#2F55FA", secondary: "#0BDBCA" },
  { primary: "#C92110", secondary: "#F26330" },
  { primary: "#490096", secondary: "#2396DE" },
  { primary: "#65088A", secondary: "#38FF9F" },
  { primary: "#FF7F50", secondary: "#FFD700" },
  { primary: "#FF4500", secondary: "#FF8C00" },
  { primary: "#1E90FF", secondary: "#00CED1" },
  { primary: "#8A2BE2", secondary: "#FF69B4" },
  { primary: "#00FA9A", secondary: "#32CD32" },
  { primary: "#FF1493", secondary: "#FF6347" },
  { primary: "#4B0082", secondary: "#9400D3" },
  { primary: "#FFA500", secondary: "#FF4500" },
  { primary: "#00BFFF", secondary: "#1E90FF" },
  { primary: "#DC143C", secondary: "#FF69B4" },
  { primary: "#228B22", secondary: "#7FFF00" },
  { primary: "#4169E1", secondary: "#87CEEB" },
  { primary: "#FF8C00", secondary: "#FFD700" },
  { primary: "#9932CC", secondary: "#DA70D6" },
  { primary: "#008B8B", secondary: "#00FFFF" },
  { primary: "#B22222", secondary: "#FF6347" },
  { primary: "#2E8B57", secondary: "#98FB98" },
  { primary: "#6A5ACD", secondary: "#9370DB" },
  { primary: "#FF1493", secondary: "#FFB6C1" },
  { primary: "#FF4500", secondary: "#FFA07A" },
  { primary: "#1E90FF", secondary: "#ADD8E6" },
  { primary: "#8B008B", secondary: "#EE82EE" },
  { primary: "#FF6347", secondary: "#FFA500" },
  { primary: "#20B2AA", secondary: "#7FFFD4" },
];
