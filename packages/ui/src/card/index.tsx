import {
  Card as MUICard,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

interface CardProps {
  sx?: SxProps<Theme>;
  title?: string;
  children: React.ReactNode;
  type: "default" | "primary" | "secondary";
}
export function Card({ sx, title, children, type }: CardProps): JSX.Element {
  const theme = useTheme();

  const colorsByType = {
    default: {
      backgroundColor: theme.palette.common.white,
    },
    primary: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    secondary: {
      backgroundColor: theme.palette.grey[400],
      color: theme.palette.grey[300],
    },
  };
  return (
    <MUICard
      sx={{
        padding: theme.spacing("large"),
        boxShadow: "none",
        borderRadius: theme.spacing("small"),
        ...colorsByType[type],
        ...sx,
      }}
    >
      {title && <Typography variant="h1">{title}</Typography>}
      {children}
    </MUICard>
  );
}
