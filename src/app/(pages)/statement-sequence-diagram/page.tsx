"use client";
import React from "react";
import { StatementSequenceDiagram } from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

const StatementSequenceDiagramPage = () => {
  const router = useRouter();
  return (
    <Box>
      <Box mt={2} mb={4}>
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <Image
            src={CommonBackIcon}
            alt="Back"
            width={40}
            height={40}
            style={{ cursor: "pointer" }}
            onClick={() => router.back()}
          />
          <Typography variant="h5" color="#5A5867" fontWeight={600} ml={2}>
            Open Banking Core Platform /Accounting Aggregation consumer service/
            Statement/
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Image
          src={StatementSequenceDiagram}
          alt="Transaction Flow"
          width={1856}
          height={3694}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
      </Box>
    </Box>
  );
};

export default StatementSequenceDiagramPage;
