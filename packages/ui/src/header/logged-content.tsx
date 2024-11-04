"use client";

import { Stack, Typography } from "@mui/material";
import { Icons } from "../icons";
import { useEffect, useState } from "react";

interface LoggedContentProps {
  userName?: string;
  children?: React.ReactNode;
}

export function LoggedContent({ userName, children }: LoggedContentProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [showUserName, setShowUserName] = useState(false);

  useEffect(() => {
    setIsMobile(window?.innerWidth < 650);
    setShowUserName(window?.innerWidth >= 450);
  }, []);

  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        justifyContent: isMobile ? "space-between" : "flex-end",
      }}
    >
      {isMobile && children}
      <Stack width="fit-content" direction="row" alignItems="center" gap="50px">
        {showUserName && (
          <Typography variant="body2" sx={{ color: "common.white" }}>
            {userName}
          </Typography>
        )}
        <Icons color="#FF5031" name="mdiAccountCircle" size={32} />
      </Stack>
    </Stack>
  );
}
