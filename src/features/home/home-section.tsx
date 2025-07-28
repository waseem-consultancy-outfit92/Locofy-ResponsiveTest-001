"use client";

import React, { useState, useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colorLegends, appLogo } from "@/assets/common-assets";
import Image from "next/image";
import SingleImgMapPage from "@/components/signle-img-map-page";
import { SequenceDiagramImage } from "@/assets";

// Define the Area interface with all its properties, including `target`
interface Area {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: "rect";
  type: "link" | "audio";
  audioSrc?: string;
  target?: string;
}

const areas = [
  {
    alt: "Blockchain Network Setup",
    title: "Blockchain Network Setup",
    href: "/blockchain-network-setup",
    coords: "1427,7,1621,72",
    shape: "rect",
  },
  {
    alt: "Web3 breakdown",
    title: "Web3 breakdown",
    href: "/web3-applications-in-crypto",
    coords: "1648,7,1789,75",
    shape: "rect",
  },
  {
    alt: "User",
    title: "User",
    href: "/end-users",
    coords: "5,72,131,219",
    shape: "rect",
  },
  {
    alt: "WalletProvider",
    title: "WalletProvider",
    href: "/wallet-providers",
    coords: "196,73,341,222",
    shape: "rect",
  },
  {
    alt: "dApp",
    title: "dApp",
    href: "/decentralized-applications-dapps",
    coords: "413,75,541,224",
    shape: "rect",
  },
  {
    alt: "Foundation Setup",
    title: "Foundation Setup",
    href: "/foundation",
    coords: "655,192,836,250",
    shape: "rect",
  },
  {
    alt: "User onboarding into Web3",
    title: "User onboarding into Web3",
    href: "/authentication",
    coords: "51,421,284,489",
    shape: "rect",
  },
  {
    alt: "User Authentication",
    title: "User Authentication",
    href: "/authentication",
    coords: "55,647,243,701",
    shape: "rect",
  },
  {
    alt: "Authentication via message signing.",
    title: "Authentication via message signing.",
    href: "/authentication",
    coords: "57,883,360,951",
    shape: "rect",
  },
  {
    alt: "Identity & Ownership",
    title: "Identity & Ownership",
    href: "/data-ownership",
    coords: "54,1070,256,1137",
    shape: "rect",
  },
  {
    alt: "Transaction Initiation",
    title: "Transaction Initiation",
    href: "/transactions",
    coords: "63,1300,269,1368",
    shape: "rect",
  },
  {
    alt: "Smart Contract Execution",
    title: "Smart Contract Execution",
    href: "/smart-contracts",
    coords: "460,1528,692,1603",
    shape: "rect",
  },
  {
    alt: "DeFi Protocol Interaction",
    title: "DeFi Protocol Interaction",
    href: "/decentralized-finance",
    coords: "64,1737,294,1806",
    shape: "rect",
  },
  {
    alt: "DAO Governance",
    title: "DAO Governance",
    href: "/governance",
    coords: "57,1996,226,2071",
    shape: "rect",
  },
  {
    alt: "Interoperability (Bridge)",
    title: "Interoperability (Bridge)",
    href: "/interoperability",
    coords: "1404,2227,1620,2296",
    shape: "rect",
  },
  {
    alt: "Storage and off-chain data.",
    title: "Storage and off-chain data.",
    href: "/storage",
    coords: "1568,2404,1815,2470",
    shape: "rect",
  },
  {
    alt: "User Receive Incentives",
    title: "User Receive Incentives",
    href: "/use-cases",
    coords: "1009,2556,1231,2625",
    shape: "rect",
  },
  {
    alt: "User",
    title: "User",
    href: "/end-users",
    coords: "12,2740,123,2861",
    shape: "rect",
  },
  {
    alt: "dApp",
    title: "dApp",
    href: "/decentralized-applications-dapps",
    coords: "206,2735,343,2853",
    shape: "rect",
  },
];


export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);



  return (
    <Box sx={{ p: 3, position: "relative" }}>
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
};