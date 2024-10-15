import { Box, Typography, useTheme } from "@mui/material";
import { Illustration } from "../illustration";
import { IconButton } from "../iconButton";
import { useState, useEffect } from "react";

export function Footer(): JSX.Element {
  const theme = useTheme();
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={width >= 720 ? "row" : "column"}
      gap={width >= 720 ? "24px" : "32px"}
      justifyContent="space-between"
      sx={{
        backgroundColor: theme.palette.common.black,
        width: "100%",
        padding: "24px 60px",
      }}
    >
      <Box display="flex" flexDirection="column" gap="16px">
        <Typography variant="body1" fontWeight="bold" color="common.white">
          Serviços
        </Typography>
        <Typography variant="body1" color="common.white">
          Conta corrente
        </Typography>
        <Typography variant="body1" color="common.white">
          Conta PJ
        </Typography>
        <Typography variant="body1" color="common.white">
          Cartão de crédito
        </Typography>
      </Box>
      <Box display="flex" flexDirection="column" gap="16px">
        <Typography variant="body1" fontWeight="bold" color="common.white">
          Contato
        </Typography>
        <Typography variant="body1" color="common.white">
          0800 004 250 08
        </Typography>
        <Typography variant="body1" color="common.white">
          meajuda@bytebank.com.br
        </Typography>
        <Typography variant="body1" color="common.white">
          ouvidoria@bytebank.com.br
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        gap="24px"
      >
        <Typography variant="body1" fontWeight="bold" color="common.white">
          Desenvolvido por Alura
        </Typography>
        <Illustration name="logoWhite" />
        <Box display="flex" gap="24px">
          <IconButton variant="dark" icon="mdiInstagram" onClick={() => {}} />
          <IconButton variant="dark" icon="mdiWhatsapp" onClick={() => {}} />
          <IconButton variant="dark" icon="mdiYoutube" onClick={() => {}} />
        </Box>
      </Box>
    </Box>
  );
}
