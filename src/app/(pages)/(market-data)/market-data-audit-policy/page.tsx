"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { MarketDataAuditPolicyImage } from "@/assets";
import { Stack } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";

const MarketDataAuditPolicyPage = () => {
  const router = useRouter();

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
              "https://aqx-web-prod-s3-public-read.s3.eu-west-2.amazonaws.com/Market_Data_Audit_Policy_Final_1_June_2024_4d015c5ec6.pdf"
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
          AQUIS MARKET DATA AUDIT
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
          src={MarketDataAuditPolicyImage}
          alt="AQUIS MARKET DATA AUDIT"
          width={1848}
          height={10815}
          layout="responsive"
        />
      </Box>
    </Stack>
  );
};

export default MarketDataAuditPolicyPage;
