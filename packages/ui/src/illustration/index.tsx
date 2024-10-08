import { illustrationsMapped } from "./illustrationMapped";

type IllustrationType = keyof typeof illustrationsMapped;

interface IllustrationProps {
  name: IllustrationType;
  width?: number;
  height?: number;
}

export function Illustration({
  name,
  width,
  height,
}: IllustrationProps): JSX.Element {
  const IllustrationRoot = illustrationsMapped[name];

  return <IllustrationRoot width={width} height={height} />;
}
