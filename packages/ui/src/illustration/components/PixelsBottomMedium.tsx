import type { IllustrationSVGProps } from "./types";

export const PixelsBottomMedium = ({
  width = 178,
  height = 180,
}: IllustrationSVGProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="45"
      y="180"
      width="45"
      height="45"
      transform="rotate(-90 45 180)"
      fill="#D9D9D9"
    />
    <rect
      x="45"
      y="135"
      width="45"
      height="45"
      transform="rotate(-90 45 135)"
      fill="#D9D9D9"
      fill-opacity="0.5"
    />
    <rect
      x="90"
      y="135"
      width="45"
      height="45"
      transform="rotate(-90 90 135)"
      fill="#DEE9EA"
      fill-opacity="0.9"
    />
    <rect
      x="45"
      y="89.9999"
      width="45"
      height="45"
      transform="rotate(-90 45 89.9999)"
      fill="#DEE9EA"
      fill-opacity="0.9"
    />
    <rect
      x="45"
      y="45"
      width="45"
      height="45"
      transform="rotate(-90 45 45)"
      fill="#D9D9D9"
      fill-opacity="0.5"
    />
    <rect
      y="45"
      width="45"
      height="45"
      transform="rotate(-90 0 45)"
      fill="#DEE9EA"
      fill-opacity="0.9"
    />
    <rect
      x="132.465"
      y="180"
      width="45"
      height="45"
      transform="rotate(-90 132.465 180)"
      fill="#DEE9EA"
      fill-opacity="0.9"
    />
  </svg>
);
