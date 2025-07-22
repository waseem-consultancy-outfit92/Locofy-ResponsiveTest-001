"use client";
import { LiquidityProviderSchemeImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { Stack, Typography, Box, Link, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ImageMapArea {
  x: number;
  y: number;
  width: number;
  height: number;
  href: string;
  title: string;
}
const LiquidityProviderSchemePage = () => {
  const router = useRouter();
  const imageWidth = 1848;
  const imageHeight = 3023;

  // Define all the clickable areas
  const areas: ImageMapArea[] = [
    {
      x: 80.72934472934473,
      y: 419.44159544159544,
      width: 380.83190883190883,
      height: 26.324786324786317,
      href: "/liquidity-provider-scheme-section1",
      title: "Liquidity Provider Scheme",
    },
  ];
  return (
    <Stack sx={{ px: 5, py: 2 }}>
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          mt={{ md: 2, xs: 1 }}
          mb={{ md: 4, sm: 3, xs: 2 }}
        >
          <Image
            src={CommonBackIcon}
            alt={""}
            width={40}
            height={40}
            onClick={() => {
              router.replace("/rules-and-fees");
            }}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h5"
            color="#5A5867"
            fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
            fontWeight={{ md: 600, xs: 500 }}
            ml={{ md: 2, xs: 1 }}
            sx={{ fontFamily: "inherit" }}
          >
            Liquidity Provider Scheme{" "}
          </Typography>
        </Stack>
        <Button
          variant="text"
          sx={{
            textDecoration: "underline",
            color: "#0246BC",
            fontWeight: "semi-bold",
            fontSize: 40,
          }}
          onClick={() => {
            window.open(
              "https://aqx-web-prod-s3-public-read.s3.eu-west-2.amazonaws.com/Aquis_Liquidity_Provider_Scheme_Effective_30_Oct_2023_a58cd593f1.pdf",
            );
          }}
        >
          Reference Doc
        </Button>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={() => {}} />
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        {/* Image */}
        <Image
          src={LiquidityProviderSchemeImage}
          alt="Liquidity Provider Scheme"
          width={imageWidth}
          height={imageHeight}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* Clickable areas */}
        {areas.map((area, index) => (
          <Link
            key={index}
            href={area.href}
            target="_parent"
            title={area.title}
            sx={{
              position: "absolute",
              left: `${(area.x / imageWidth) * 100}%`,
              top: `${(area.y / imageHeight) * 100}%`,
              width: `${(area.width / imageWidth) * 100}%`,
              height: `${(area.height / imageHeight) * 100}%`,
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "2px solid white",
                cursor: "pointer",
              },
            }}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default LiquidityProviderSchemePage;
