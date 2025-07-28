"use client";
import React from "react";
import { RegulatoryTransactionReportingServiceSpecificationImage } from "@/assets";
// import { CommonPage } from "@/components";
// import AmendmentComparison from "@/components/amendment-comparison";
// import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

const RegulatoryTransactionReportingServiceSpecificationPage = () => {
  const router = useRouter();
  const imageWidth = 1844;
  const imageHeight = 5704;
  return (
    <>
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
                router.replace("/technical-specifications");
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
              Regulatory Transaction Reporting Service Technical Specification
              September 2022 Version 3.5
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
                "https://aquis-public-files.s3.eu-west-2.amazonaws.com/pdf_assets/Aquis+Regulatory+Transaction+Reporting+Service+Specification+Sept22v3.5.pdf",
              );
            }}
          >
            Reference Doc
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box mb={{ md: 4, sm: 3, xs: 2 }}>
            <CheckboxForm onChange={() => {}} />
          </Box>
          <Button
            variant="text"
            sx={{
              fontWeight: "semi-bold",
              fontSize: { md: "2.5rem", xs: "1rem" },
              color: "#5A5867",
            }}
            endIcon={
              <ExpandCircleDownOutlinedIcon
                sx={{ width: { md: 40, xs: 20 }, height: { md: 40, xs: 20 } }}
              />
            }
            onClick={() => {
              router.push("/error-description");
            }}
          >
            Error Descriptions
          </Button>
        </Stack>

        {/* Image */}
        <Image
          src={RegulatoryTransactionReportingServiceSpecificationImage}
          alt="AQSE Listing Proposal Overview"
          width={imageWidth}
          height={imageHeight}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* Clickable areas with tooltips */}
      </Stack>
    </>
  );
};

export default RegulatoryTransactionReportingServiceSpecificationPage;
