import { MacOrderFormImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import { Box, Typography } from "@mui/material";
import React from "react";

const areas = [
  {
    alt: "Applicant Information",
    title: "Applicant Information",
    href: "/applicant-information",
    coords: "31,833,412,886",
    shape: "rect",
  },
  {
    alt: "Requirements & Agreements",
    title: "Requirements & Agreements",
    href: "/requirements-agreements",
    coords: "29,1353,502,1414",
    shape: "rect",
  },
];

const MacOrderFormPage = () => {
  return (
    <Box position="relative">
      <Box
        sx={{
          position: "absolute",
          top: 50,
          right: 24,
          zIndex: 10,
        }}
      >
        <Typography
          component="a"
          href="https://aqx-web-prod-s3-public-read.s3.eu-west-2.amazonaws.com/Aquis_UK_Ma_C_Order_Form_v3_1_44973bc0c4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#0057D9",
            fontWeight: 600,
            fontSize: "20px",
            borderBottom: "3px solid #0057D9",
            paddingBottom: "2px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Reference Doc
        </Typography>
      </Box>

      <CommonImgMapPage
        pageTitle={`MaC Order Form`}
        image={MacOrderFormImage}
        backRoute="/legal-agreements"
        areas={areas}
      />
    </Box>
  );
};

export default MacOrderFormPage;
