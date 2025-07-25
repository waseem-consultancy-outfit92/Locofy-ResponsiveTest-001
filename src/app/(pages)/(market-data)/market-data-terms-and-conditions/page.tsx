"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { AquisExchangeMarketDataImage } from "@/assets";
import { Stack } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";

const MarketDataTermsAndConditionsPage = () => {
  const router = useRouter();

  const areas = [
    {
      id: 1,
      title: "Definitions and interpretation",
      href: "/market-data-terms-and-conditions-applied",
      x: 87.74928774928775,
      y: 403.6467236467237,
      width: 426.46153846153845,
      height: 36.85470085470081,
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
            href={"/"}
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
          Aquis Exchange Market Data
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
          src={AquisExchangeMarketDataImage}
          alt="Aquis Exchange Market Data"
          width={1848}
          height={16892}
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
                  top: `${(area.y / 16892) * 100}%`,
                  width: `${(area.width / 1848) * 100}%`,
                  height: `${(area.height / 16892) * 100}%`,
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Stack>
  );
};

export default MarketDataTermsAndConditionsPage;
