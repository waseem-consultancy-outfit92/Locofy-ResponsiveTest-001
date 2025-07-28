"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { MarketDataFeeScheduleImage } from "@/assets";
import { Stack } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";

const MarketDataFeeSchedulePage = () => {
  const router = useRouter();

  const areas = [
    {
      id: 2,
      title: "DATA AND LICENCE FEES",
      href: "/fee-schedule-data-and-licence-fees",
      x: 78.97435897435898,
      y: 587.920227920228,
      width: 377.3219373219373,
      height: 40.36467236467229,
    },
    {
      id: 3,
      title: "DISAGGREGATED DATA",
      href: "/fee-schedule-disaggregated-data",
      x: 71.95441595441595,
      y: 1751.4757834757834,
      width: 389.60683760683764,
      height: 45.62962962962979,
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
              "https://aqx-web-prod-s3-public-read.s3.eu-west-2.amazonaws.com/Aquis_Market_Data_Fee_Schedule_effective_1_April_2025_8d1ca3a638.pdf"
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
          Fee Schedule (Market Data) - Effective June 2025
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
          src={MarketDataFeeScheduleImage}
          alt="Fee Schedule (Market Data) - Effective June 2025"
          width={1848}
          height={2843}
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
                  top: `${(area.y / 2843) * 100}%`,
                  width: `${(area.width / 1848) * 100}%`,
                  height: `${(area.height / 2843) * 100}%`,
                  "&:hover": {
                    border: "2px solid white",
                    opacity: 0.2,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                  },
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Stack>
  );
};

export default MarketDataFeeSchedulePage;
