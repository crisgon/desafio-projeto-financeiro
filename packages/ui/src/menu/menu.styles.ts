export const menuOverrides = {
  boxShadow: "none",
  border: "none",
  backgroundColor: "#E4EDE3",
  borderRadius: 0,
  padding: "18px",
  top: "0 !important",
  left: "0 !important",
  li: {
    borderBottom: "1px solid #000",
    justifyContent: "center",
    padding: "16px",
    margin: "0 16px",
  },
  ul: {
    padding: "0px",
    display: "flex",
    flexDirection: "column",
  },
  "@media (min-width: 720px)": {
    backgroundColor: "transparent",
    padding: "0px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
};
