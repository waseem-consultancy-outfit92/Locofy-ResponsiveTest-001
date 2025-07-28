import { TransactionReportingAddendumImage } from "@/assets";
import { CommonPage } from "@/components";
import { Box, Typography } from "@mui/material";
import React from "react";

const TransactionReportingAddendumPage = () => {
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
          href="https://aquis-public-files.s3.eu-west-2.amazonaws.com/pdf_assets/Aquis+PLC+Transaction+Reporting+Addendum+v1.1.pdf"
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

      <CommonPage
        pageTitle={`Transaction Reporting Addendum`}
        src={TransactionReportingAddendumImage}
        backRoute="/legal-agreements"
      />
    </Box>
  );
};

export default TransactionReportingAddendumPage;
