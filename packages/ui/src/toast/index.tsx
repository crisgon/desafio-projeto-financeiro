import { Alert, Snackbar, SnackbarOrigin } from "@mui/material";

interface ToastProps {
  isOpen: boolean;
  content: string | JSX.Element;
  type: "info" | "success" | "error" | "warning";
  handleClose: () => void;
  anchorOrigin?: SnackbarOrigin;
}

export function Toast({
  handleClose,
  isOpen,
  type,
  content,
  anchorOrigin,
}: ToastProps): JSX.Element {
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={anchorOrigin ?? { vertical: "top", horizontal: "center" }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {content}
      </Alert>
    </Snackbar>
  );
}
