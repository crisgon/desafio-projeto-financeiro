import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  IconButton,
  useTheme,
} from "@mui/material";
import { Icons } from "../icons";
import { Button } from "../button";

interface ModalProps {
  title: string;
  handleClose: () => void;
  handleConfirm: () => void;
  open: boolean;
  content: JSX.Element;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

export function Modal({
  title,
  handleClose,
  handleConfirm,
  content,
  open,
  confirmButtonText,
  cancelButtonText,
}: ModalProps) {
  const theme = useTheme();
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        data-testid="close-button"
        onClick={handleClose}
        sx={() => ({
          position: "absolute",
          right: 8,
          top: 8,
        })}
      >
        <Icons color={theme.palette.primary.dark} name={"mdiClose"} />
      </IconButton>

      <DialogContent>{content}</DialogContent>
      <DialogActions>
        {cancelButtonText && (
          <Button
            color="primary"
            variant="outlined"
            onClick={handleClose}
            label={cancelButtonText}
          />
        )}
        {confirmButtonText && (
          <Button
            color="primary"
            variant="contained"
            onClick={handleConfirm}
            label={confirmButtonText}
          />
        )}
      </DialogActions>
    </Dialog>
  );
}
