"use client";
import React from "react";
import { MultiPathPage } from "@/components";
import {
  img1AccessRulebookImage,
  img2AccessRulebookImage,
  img3AccessRulebookImage,
  img4AccessRulebookImage,
  img5AccessRulebookImage,
  img6AccessRulebookImage,
  img7AccessRulebookImage,
  img8AccessRulebookImage,
  img9AccessRulebookImage,
  img10AccessRulebookImage,
} from "@/assets";
import { Box, Typography } from "@mui/material";

const AccessRulebookPageData = [
  {
    key: "access-1",
    link: "/introduction",
    icon: img1AccessRulebookImage,
    title: "Introduction",
  },
  {
    key: "access-2",
    link: "/definition",
    icon: img2AccessRulebookImage,
    title: "Definition",
  },
  {
    key: "access-3",
    link: "/application-process",
    icon: img3AccessRulebookImage,
    title: "Application Process",
  },
  {
    key: "access-4",
    link: "/eligibility-for-admission",
    icon: img4AccessRulebookImage,
    title: "Eligibility For Admission",
  },
  {
    key: "access-5",
    link: "/continuing-obligations",
    icon: img5AccessRulebookImage,
    title: "Continuing Obligations",
  },
  {
    key: "access-6",
    link: "/disclosure-and-transparency-obligations",
    icon: img6AccessRulebookImage,
    title: "Disclosure And Transparency Obligations",
  },
  {
    key: "access-7",
    link: "/suspending-cancelling-and-restoring-trading-and-admission",
    icon: img7AccessRulebookImage,
    title: "Suspending, Cancelling And Restoring Trading And Admission",
  },
  {
    key: "access-8",
    link: "/fast-track",
    icon: img8AccessRulebookImage,
    title: "Fast-Track",
  },
  {
    key: "access-9",
    link: "/investigations-sanctions-and-discipline",
    icon: img9AccessRulebookImage,
    title: "Investigations, Sanctions And Discipline",
  },
  {
    key: "access-10",
    link: "/admission-document-appendix-i",
    icon: img10AccessRulebookImage,
    title: "Admission Document (Appendix I)",
  },
];

const AccessRulebookPage = () => {
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
    <MultiPathPage
      arrayData={AccessRulebookPageData}
      pageTitle="Access Rulebook"
      backRoute="/rules-and-fees"
    />
    </Box>
  );
};

export default AccessRulebookPage;
