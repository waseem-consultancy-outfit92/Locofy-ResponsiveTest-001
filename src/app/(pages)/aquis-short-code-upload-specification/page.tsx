import { SaquisShortCodeUploadSpecificationImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const areas = [
  {
    alt: "Mapping File Details and Format",
    title: "Mapping File Details and Format",
    href: "/mapping-file-details-and-format",
    coords: "35,1319,556,1378",
    shape: "rect",
  },
  {
    alt: "Short Code Exceptions Report",
    title: "Short Code Exceptions Report",
    href: "/short-code-exceptions-report",
    coords: "38,3299,487,3346",
    shape: "rect",
  },
];

const AquisShortCodeUploadSpecificationPage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <Box
          component={Link}
          href="/"
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

      <CommonImgMapPage
        pageTitle={`Aquis Short Code Upload Specification`}
        image={SaquisShortCodeUploadSpecificationImage}
        backRoute="/market-data"
        areas={areas}
      />
    </>
  );
};

export default AquisShortCodeUploadSpecificationPage;
