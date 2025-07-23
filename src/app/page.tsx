
"use client";

import React, { useState, useCallback } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { SequenceDiagramImage } from "@/assets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colorLegends, appLogo } from "@/assets/common-assets";
import SingleImgMapPage from "@/components/signle-img-map-page";
import Image from "next/image";
import { HomeSection } from "@/features/home/home-section";

const areas = [
  {
    alt: "Blockchain Network Setup",
    title: "Blockchain Network Setup",
    href: "/blockchain-network-setup",
    coords: "1474,15,1685,85",
    shape: "rect",
  },
  {
    alt: "Web3 breakdown",
    title: "Web3 breakdown",
    href: "/web3-applications-in-crypto",
    coords: "1700,12,1850,88",
    shape: "rect",
  },
];
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <Box sx={{ p: 3, position: "relative" }}>
      {/* <HomeSection /> */}
      <Stack flexDirection="row" alignItems="center" mt={{ md: 2, xs: 1 }}>
        <Image src={appLogo} alt="FCA Logo" width={100} height={31} />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
        >
          Web3 Listing Process
        </Typography>
      </Stack>

      <Stack flexDirection="row" justifyContent="space-between" mt={4}>
        <Typography
          variant="h3"
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
        >
          Sequence Diagram
        </Typography>

        <Typography
          variant="h3"
          fontWeight={600}
          ml={2}
          display="flex"
          alignItems="center"
        >
          <Typography
            component="span"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.8rem" }}
            fontWeight={600}
            color="#5A5867"
            sx={{ mr: 1 }}
          >
            Colour Legend
          </Typography>
          <span>
            <KeyboardArrowDownIcon
              onClick={toggleDropdown}
              sx={{
                fontSize: { xs: 28, md: 30 },
                color: "#5A5867",
                border: "2px solid",
                borderRadius: "40px",
                cursor: "pointer",
              }}
            />
          </span>
        </Typography>
      </Stack>
      {isOpen && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              zIndex: 1200,
            }}
            onClick={() => setIsOpen(false)}
          />
          <Box
            sx={{
              position: "absolute",
              top: "150px",
              right: "50px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: 3,
              p: 1,
              zIndex: 1300,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={colorLegends}
              alt="Color Legend"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </>
      )}
      <SingleImgMapPage
        image={SequenceDiagramImage}
        areas={areas}
      />
    </Box>
  );
}