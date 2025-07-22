"use client";
import { AquisExchangeFeeScheduleImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
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

const AquisExchangeFeeSchedule: React.FC = () => {
  const router = useRouter();
  // Original SVG dimensions
  const originalWidth = 1848;
  const originalHeight = 6439;
  const imageSrc = "/AQUIS EXCHANGE FEE SCHEDULE.svg";

  const areas: ImageMapArea[] = [
    {
      x: 82.48433048433048,
      y: 633.5498575498575,
      width: 375.56695156695156,
      height: 43.87464387464388,
      href: "/trading-memberships",
      title: "TRADING MEMBERSHIPS",
    },
    {
      x: 84.23931623931624,
      y: 2281.4814814814813,
      width: 352.7521367521368,
      height: 36.85470085470115,
      href: "/liquidity-providers-lps",
      title: "Liquidity Providers (LPs)",
    },
    {
      x: 459.8062678062678,
      y: 3634.5754985754984,
      width: 852.923076923077,
      height: 43.87464387464388,
      href: "/aquis-matching-pool-amp-conditional-orders",
      title: "AQUIS MATCHING POOL (AMP) & CONDITIONAL ORDERS",
    },
    {
      x: 75.46438746438747,
      y: 3999.612535612536,
      width: 415.9316239316239,
      height: 43.87464387464388,
      href: "/transaction-reporting",
      title: "TRANSACTION REPORTING",
    },
    {
      x: 71.95441595441598,
      y: 5280.752136752137,
      width: 250.96296296296293,
      height: 52.6495726495732,
      href: "/connectivity",
      title: "CONNECTIVITY",
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
            Aquis Exchange Fee Schedule
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
              "https://aqx-web-prod-s3-public-read.s3.eu-west-2.amazonaws.com/Aquis_Fee_Schedule_Effective_April_2025_41d2846d5b.pdf",
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
          aspectRatio: `${originalWidth}/${originalHeight}`,
        }}
      >
        {/* Next.js Image Component */}
        <Image
          src={AquisExchangeFeeScheduleImage}
          alt="Aquis Exchange Fee Schedule"
          fill
          style={{
            objectFit: "contain",
            width: "100%",
          }}
          quality={100}
          priority
        />

        {/* Interactive Areas */}
        {areas.map((area, index) => (
          <Link
            key={index}
            href={area.href}
            target="_parent"
            sx={{
              position: "absolute",
              left: `${(area.x / originalWidth) * 100}%`,
              top: `${(area.y / originalHeight) * 100}%`,
              width: `${(area.width / originalWidth) * 100}%`,
              height: `${(area.height / originalHeight) * 100}%`,
              cursor: "pointer",
              "&:hover": {
                outline: "2px solid white",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              },
            }}
            aria-label={area.title}
          />
        ))}
      </Box>
    </Stack>
  );
};

export default AquisExchangeFeeSchedule;
