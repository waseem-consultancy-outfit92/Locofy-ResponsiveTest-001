"use client";

import { MemberParticipationAgreementImage } from "@/assets";
import { CommonPage } from "@/components";
import { Box, Typography } from "@mui/material";
import React from "react";

const MemberParticipationAgreementPage = () => {
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
          href="https://s3.eu-west-2.amazonaws.com/aquis-public-files/pdf_assets/Aquis-Member-Participation-Agreement.pdf" 
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
        pageTitle="Member Participation Agreement"
        src={MemberParticipationAgreementImage}
        backRoute="/legal-agreements"
      />
    </Box>
  );
};

export default MemberParticipationAgreementPage;
