import React from "react";
import { Box, Button, Menu, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
import { ColorLegendsImage } from "@/assets";

export default function ColorLegends() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        id="color-legends-button"
        aria-controls={open ? "color-legends-button" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          display: "flex",
          alignItems: "center",
          minWidth: "0",
        }}
        onClick={handleClick}
        disableElevation
      >
        <Typography
          component="span"
          fontSize={{ xs: "1rem", sm: "1.2rem", md: "35px" }}
          fontWeight={600}
          color="#0246BC"
          sx={{ mr: 1 }}
        >
          Colour Legend
        </Typography>
        <KeyboardArrowDownIcon
          sx={{
            fontSize: { xs: 28, md: 30 },
            color: "#0246BC",
            border: "2px solid",
            borderRadius: "40px",
            cursor: "pointer",
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          list: {
            "aria-labelledby": "color-legends-button",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "0",
            boxShadow: "none",

            "& .MuiMenu-list": {
              padding: "0",
            },
          },
        }}
      >
        <Box sx={{ maxWidth: "396px", minWidth: "396px" }}>
          <Image
            src={ColorLegendsImage}
            alt="Color Legend"
            width={396}
            height={492}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "100%",
              display: "block",
            }}
          />
        </Box>
      </Menu>
    </Box>
  );
}
