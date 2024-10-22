import { MOBILE_SIZE } from "app/context/dashboard-context.utils";

const styles = {
  pixelsTop: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
  },
  pixelsBottom: {
    position: "absolute",
    zIndex: 0,
    left: 0,
    bottom: -7,
  },
  card: {
    height: "420px",
    position: "relative",
    [`@media (max-width: ${MOBILE_SIZE}px)`]: {
      height: "570px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
};

export default styles;
