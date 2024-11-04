import type { IllustrationSVGProps } from "./types";

export const PixelsTopLight = ({
  width = 180,
  height = 178,
}: IllustrationSVGProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.3">
      <rect
        width="45"
        height="45"
        transform="matrix(-1 0 0 1 180 45)"
        fill="#D9D9D9"
      />
      <rect
        width="45"
        height="45"
        transform="matrix(-1 0 0 1 135 45)"
        fill="#D9D9D9"
        fillOpacity="0.5"
      />
      <rect
        width="45"
        height="45"
        transform="matrix(-1 0 0 1 135 90)"
        fill="#D9D9D9"
        fillOpacity="0.9"
      />
      <rect
        width="45"
        height="45"
        transform="matrix(-1 0 0 1 89.9998 45)"
        fill="#D9D9D9"
        fillOpacity="0.9"
      />
      <rect
        width="45"
        height="45"
        transform="matrix(-1 0 0 1 45 45)"
        fill="#D9D9D9"
        fillOpacity="0.5"
      />
      <rect
        width="45"
        height="45"
        transform="matrix(-1 0 0 1 45 0)"
        fill="#D9D9D9"
        fillOpacity="0.9"
      />
      <rect
        width="45"
        height="45"
        transform="matrix(-1 0 0 1 180 132.465)"
        fill="#D9D9D9"
        fillOpacity="0.9"
      />
    </g>
  </svg>
);
