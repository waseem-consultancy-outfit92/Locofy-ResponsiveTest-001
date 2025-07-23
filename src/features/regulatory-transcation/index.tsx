"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ErrorDescriptionsImage,
  RegulatoryTransactionReportingServiceSpecificationImage,
} from "@/assets";
import React, { useState, useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CommonBackIcon } from "@/assets/common-assets";
import Link from "next/link";

export const RegulatoryTranscation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <Box sx={{ p: 3, position: "relative" }}>
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

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        {/* Left Section: Back Icon + Title */}
        <Stack direction="row" alignItems="center" gap={{ xs: 1, md: 2 }}>
          <Image
            src={CommonBackIcon}
            alt="Back"
            width={40}
            height={40}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h5"
            color="#5A5867"
            fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
            fontWeight={{ xs: 500, md: 600 }}
            sx={{ fontFamily: "inherit" }}
          >
            Regulatory Transaction Reporting Service Technical Specification
            September 2022 Version 3.5
          </Typography>
        </Stack>

        {/* Right Section: Key Terms + Dropdown */}
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography
            component="span"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.8rem" }}
            fontWeight={600}
            color="#5A5867"
          >
            Error Descriptions
          </Typography>
          <KeyboardArrowDownIcon
            onClick={toggleDropdown}
            sx={{
              fontSize: { xs: 28, md: 30 },
              color: "#5A5867",
              border: "2px solid",
              borderRadius: "40px",
              cursor: "pointer",
            }}
          />
        </Stack>
      </Stack>
      <Image
        src={RegulatoryTransactionReportingServiceSpecificationImage.src}
        alt="Aqse overview"
        width={40}
        height={40}
        style={{ width: "100%", height: "100%" }}
      />

      {isOpen && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              zIndex: 1200,
            }}
            onClick={() => setIsOpen(false)}
          />
          <Box
            sx={{
              position: "absolute",
              top: "150px",
              right: "50px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: 3,
              p: 1,
              zIndex: 1300,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={ErrorDescriptionsImage.src}
              alt="Key Terms"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};
