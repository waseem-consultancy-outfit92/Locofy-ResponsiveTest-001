"use client";

import React, { useCallback } from "react";
<<<<<<< HEAD
import Image from "next/image";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { MultiBackIcon } from "@/assets/common-assets";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";
=======
import Image, { StaticImageData } from "next/image";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { MultiBackIcon } from "@/assets/common-assets";
import type { ResponsiveStyleValue } from "@mui/system";

>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
type MultiPathPageItem = {
  key: string;
  link?: string;
  icon: string | StaticImageData;
  title?: string;
  size?: any;
};

type MultiPathPageProps = {
  arrayData: MultiPathPageItem[];
  pageTitle: string;
  backRoute?: string;
  fontSize?: ResponsiveStyleValue<string>;
  iconWidth?: string;
  background?: string;
  amendmentButtonRoute?: string;
  glossary?: any;
};

const MultiPathPage: React.FC<MultiPathPageProps> = ({
  arrayData,
  pageTitle,
  backRoute = "/",
  fontSize = { xs: "20px", sm: "30px", md: "40px" },
  background = "#e7f0ff",
  amendmentButtonRoute,
  glossary,
}) => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
<<<<<<< HEAD
  }, [router]);
  const onGlossaryButtonClick = useCallback(() => {
    router.push(glossary); // _blank opens in new tab
  }, [glossary]);
  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          mt={{ md: 2, xs: 1 }}
          mb={{ md: 5, sm: 3, xs: 2 }}
=======
  }, [router, backRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 5, sm: 3, xs: 2 }}
      >
        <Image
          src={MultiBackIcon}
          alt={pageTitle}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#0246BC"
          fontSize={fontSize}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{
            fontFamily: "inherit",
          }}
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
        >
          <Image
            src={MultiBackIcon}
            alt={pageTitle}
            width={40}
            height={40}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h5"
            color="#0246BC"
            fontSize={fontSize}
            fontWeight={{ md: 600, xs: 500 }}
            ml={{ md: 2, xs: 1 }}
            sx={{
              fontFamily: "inherit",
            }}
          >
            {pageTitle}
          </Typography>
        </Stack>
        {amendmentButtonRoute && (
          <Button
            onClick={() => {
              window.open(amendmentButtonRoute, "_blank");
            }}
            sx={{
              backgroundColor: "#5A5867",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#4A4857",
              },
              cursor: "pointer",
              fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
              padding: { xs: "6px 12px", md: "8px 16px" },
              textTransform: "capitalize",
            }}
          >
            Reference Document
          </Button>
        )}{" "}
        {glossary && (
          <Button
            variant="text"
            sx={{
              color: "#5A5867",
              cursor: "pointer",
              fontSize: { xs: "0.7rem", sm: "0.9rem", md: "2rem" },
              padding: { xs: "6px 12px", md: "8px 16px" },
              textTransform: "capitalize",
            }}
            onClick={onGlossaryButtonClick}
            endIcon={
              <ArrowCircleDownOutlinedIcon
                sx={{
                  width: 30,
                  height: 30,
                }}
              />
            }
          >
            Glossary
          </Button>
        )}
      </Stack>
      <Grid container spacing={2}>
        {arrayData.map((item) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.key}>
            <Card
              onClick={() => {
                if (item.link) {
                  router.push(item.link);
                }
              }}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: background,
                cursor: item.link ? "pointer" : "default",
                borderRadius: 6,
                textAlign: "center",
                boxShadow: "none",
                p: 4,
                alignContent: "center",
              }}
            >
              <Image
                src={item.icon}
                alt={item.title ?? item.key}
                width={200}
                height={200}
                style={{ width: "100%", objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  color="#3571b0"
                  fontSize={{ xs: "1.2rem", sm: "18px", md: "32px" }}
                  fontWeight={{ md: 600, xs: 500 }}
                  sx={{
                    fontFamily: "inherit",
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MultiPathPage;
