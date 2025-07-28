import { SoftwareVendorApplicationFormImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import { Box, Typography } from "@mui/material";
import React from "react";

const areas = [
  {
    alt: "Company Information",
    title: "Company Information",
    href: "/company-information-1",
    coords: "38,406,429,464",
    shape: "rect",
  },
  {
    alt: "Contact Information",
    title: "Contact Information",
    href: "/contact-information",
    coords: "35,1359,404,1412",
    shape: "rect",
  },
  {
    alt: "Connectivity Services Required",
    title: "Connectivity Services Required",
    href: "/connectivity-services-required",
    coords: "29,1962,535,2014",
    shape: "rect",
  },
];

const SoftwareVendorApplicationFormPage = () => {
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
          href="https://s3.eu-west-2.amazonaws.com/aquis-public-files/pdf_assets/Software-Vendor-Application-Form.pdf"
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
        pageTitle={`Software Vendor Application Form`}
        image={SoftwareVendorApplicationFormImage}
        backRoute="/legal-agreements"
        areas={areas}
      />
    </Box>
  );
};

export default SoftwareVendorApplicationFormPage;
