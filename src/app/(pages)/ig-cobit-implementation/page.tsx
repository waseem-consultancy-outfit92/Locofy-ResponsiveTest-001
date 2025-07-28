"use client";
import {
  SubjectAccessRequestImage,
  ColorLegendsKeyImage,
  COBITImplementationImage,
} from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import {
  Stack,
  IconButton,
  Button,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

const IGCobitImplementationPage = () => {
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const originalImageWidth = 1889;
  const originalImageHeight = 1236;
  return (
    <>
      <Stack spacing={2} px={3} py={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <IconButton>
            <Image src={CommonBackIcon} alt="backBTn" />
          </IconButton>
          <Button
            endIcon={
              <ExpandCircleDownOutlinedIcon sx={{ width: 40, height: 40 }} />
            }
            sx={{
              color: "#5A5867",
              fontWeight: "semi-bold",
              fontSize: 32,
              fontFamily: "Outfit",
            }}
            onClick={() => {
              setIsLegendOpen(true);
            }}
          >
            Color Legends (Key)
          </Button>
        </Stack>
        <Typography
          sx={{
            color: "#5A5867",
            fontWeight: 600,
            fontSize: 32,
            fontFamily: "Outfit",
          }}
        >
          COBIT Implementation{" "}
        </Typography>
        <Box>
          <Image
            src={COBITImplementationImage}
            alt="SubjectAccessRequestImage"
            width={originalImageWidth}
            height={originalImageHeight}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />
        </Box>
      </Stack>
      <Modal
        open={isLegendOpen}
        onClose={() => {
          setIsLegendOpen(false);
        }}
        sx={{
          width: "fit-content",
          left: { md: "70%", xs: "10%" },
          top: { md: "10%", xs: "20%" },
        }}
      >
        <Image src={ColorLegendsKeyImage} alt="Color Legend" />
      </Modal>
    </>
  );
};

export default IGCobitImplementationPage;
