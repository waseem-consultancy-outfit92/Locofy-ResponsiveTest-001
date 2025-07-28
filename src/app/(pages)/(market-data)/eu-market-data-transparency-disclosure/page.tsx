"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { MarketDataTransparencyDisclosureImage } from "@/assets";
import { Stack } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";

const MarketDataTransparencyDisclosurePage = () => {
  const router = useRouter();

  const areas = [
    {
      id: 2,
      title:
        "Information on the content of the market data distributed by Aquis Exchange Europe SAS",
      href: "/eu-market-data-distributed",
      x: 82.48433048433048,
      y: 1491.7378917378917,
      width: 1258.3247863247864,
      height: 36.85470085470092,
    },
    {
      id: 3,
      title: "Market data revenues for Aquis Exchange Europe SAS FY 2024",
      href: "/eu-market-data-revenues",
      x: 82.48433048433048,
      y: 2676.353276353276,
      width: 877.4928774928775,
      height: 35.09971509971501,
    },
  ];

  return (
    <Stack px={5} py={3} gap={"40px"}>
      <Stack>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            src={CommonBackIcon}
            alt={"backIcon"}
            width={40}
            height={40}
            onClick={() => {
              router.replace("/market-data");
            }}
            style={{ cursor: "pointer" }}
          />
          <Box
            component={Link}
            href={
              "https://aqx-web-prod-s3-public-read.s3.eu-west-2.amazonaws.com/Aquis_Exchange_Europe_Market_Data_Transparency_Disclosure_2024_54822f3966.pdf"
            }
            sx={{
              color: "#0246BC",
              fontSize: "40px",
              fontWeight: "500",
              textDecoration: "underline",
              lineHeight: "1.2",
            }}
          >
            Reference Doc
          </Box>
        </Box>
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "24", sm: "26px", md: "32px" }}
          fontWeight={{ md: 600, xs: 500 }}
          mt={3}
          sx={{
            fontFamily: "inherit",
            lineHeight: "1.25",
          }}
        >
          AQUIS EXCHANGE EUROPE MARKET DATA TRANSPARENCY DISCLOSURE 2024
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mb={{ md: 4, sm: 3, xs: 2 }}>
          <CheckboxForm onChange={() => {}} />
        </Box>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          marginTop: "0px",
        }}
      >
        <Image
          src={MarketDataTransparencyDisclosureImage}
          alt="AQUIS EXCHANGE EUROPE  MARKET DATA TRANSPARENCY  DISCLOSURE 2024"
          width={1848}
          height={6722}
          layout="responsive"
        />

        {areas.map((area) => (
          <Tooltip key={area.id} title={area.title} arrow>
            <Link href={area.href} passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  position: "absolute",
                  left: `${(area.x / 1848) * 100}%`,
                  top: `${(area.y / 6722) * 100}%`,
                  width: `${(area.width / 1848) * 100}%`,
                  height: `${(area.height / 6722) * 100}%`,
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Stack>
  );
};

export default MarketDataTransparencyDisclosurePage;
