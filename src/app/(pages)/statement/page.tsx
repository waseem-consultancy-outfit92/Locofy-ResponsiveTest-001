"use client";
import { statement } from "@/assets";
import { glossary } from "@/assets";
import React, { useState } from "react";
import {
  Box,
  Tooltip,
  useTheme,
  useMediaQuery,
  Button,
  DialogContent,
  Typography,
  Dialog,
  IconButton,
  Stack,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";

interface ClickableArea {
  id: number;
  href: string;
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ScaledCoordinates {
  left: string;
  top: string;
  width: string;
  height: string;
}

const StatementImageMap = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [hoveredArea, setHoveredArea] = useState<number | null>(null);

  // Define the clickable areas with their coordinates and metadata
  const clickableAreas: ClickableArea[] = [
    // Statement 200 Read sections
    {
      id: 1,
      href: "/statements-read",
      title: "Statement 200 Read",
      x: 84.78,
      y: 2619.54,
      width: 81.25,
      height: 83.02,
    },
    {
      id: 2,
      href: "/statements-read-section1",
      title: "Statement 200 Read 1",
      x: 81.25,
      y: 3534.53,
      width: 79.49,
      height: 83.02,
    },
    {
      id: 3,
      href: "/statements-read-section2",
      title: "statements-read-section2",
      x: 86.55,
      y: 5350.37,
      width: 74.19,
      height: 75.95,
    },
    {
      id: 5,
      href: "/statements-read-section3",
      title: "statements-read-section3",
      x: 88.32,
      y: 6260.06,
      width: 68.89,
      height: 70.66,
    },
    {
      id: 7,
      href: "/statements-read-section4",
      title: "/statements-read-section4",
      x: 91.85,
      y: 8079.43,
      width: 65.36,
      height: 77.72,
    },
    {
      id: 9,
      href: "/statements-read-section5",
      title: "/statements-read-section5",
      x: 86.55,
      y: 8982.05,
      width: 72.42,
      height: 88.32,
    },
    {
      id: 10,
      href: "/statements-read-section6",
      title: "/statements-read-section6",
      x: 79.49,
      y: 10801.42,
      width: 81.25,
      height: 91.85,
    },
    {
      id: 11,
      href: "/statements-read-section7",
      title: "/statements-read-section7",
      x: 83.02,
      y: 11714.64,
      width: 83.02,
      height: 81.25,
    },

    // Statement Bad Request sections
    {
      id: 12,
      href: "/statement-bad-request",
      title: "statement-bad-request",
      x: 436.3,
      y: 2619.54,
      width: 88.32,
      height: 81.25,
    },
    {
      id: 13,
      href: "/statement-bad-request-section1",
      title: "statement-bad-request-section1",
      x: 429.23,
      y: 3529.23,
      width: 88.32,
      height: 81.25,
    },
    {
      id: 14,
      href: "/statement-bad-request-section2",
      title: "statement-bad-request-section2",
      x: 441.6,
      y: 4440.68,
      width: 79.49,
      height: 75.95,
    },
    {
      id: 15,
      href: "/statement-bad-request-section3",
      title: "statement-bad-request-section3",
      x: 438.06,
      y: 5346.84,
      width: 83.02,
      height: 81.25,
    },
    {
      id: 16,
      href: "statement-bad-request-section4",
      title: "statement-bad-request-section4",
      x: 431.0,
      y: 6252.99,
      width: 86.55,
      height: 79.49,
    },
    {
      id: 17,
      href: "/statement-bad-request-section5",
      title: "statement-bad-request-section5",
      x: 439.83,
      y: 7160.91,
      width: 83.02,
      height: 84.79,
    },
    {
      id: 18,
      href: "/statement-bad-request-section6",
      title: "statement-bad-request-section6",
      x: 432.76,
      y: 8070.6,
      width: 91.85,
      height: 88.32,
    },
    {
      id: 21,
      href: "/statement-bad-request-section7",
      title: "statement-bad-request-section7",
      x: 427.46,
      y: 8982.05,
      width: 97.15,
      height: 95.38,
    },
    {
      id: 22,
      href: "/statement-bad-request-section8",
      title: "statement-bad-request-section8",
      x: 431.0,
      y: 9879.37,
      width: 90.09,
      height: 98.92,
    },
    {
      id: 23,
      href: "/statement-bad-request-section9",
      title: "statement-bad-request-section9",
      x: 423.93,
      y: 10792.59,
      width: 97.15,
      height: 100.68,
    },
    {
      id: 24,
      href: "/statement-bad-request-section10",
      title: "statement-bad-request-section10",
      x: 425.7,
      y: 11704.05,
      width: 95.38,
      height: 93.62,
    },
    {
      id: 25,
      href: "/statement-bad-request-section11",
      title: "statement-bad-request-section11",
      x: 427.46,
      y: 12603.13,
      width: 95.38,
      height: 111.28,
    },

    // Statement Forbidden sections
    {
      id: 26,
      href: "/statement-forbidden",
      title: "statement-forbidden",
      x: 1158.75,
      y: 2621.31,
      width: 84.79,
      height: 72.42,
    },
    {
      id: 27,
      href: "/statement-forbidden-section1",
      title: "statement-forbidden-section1",
      x: 1146.38,
      y: 3532.76,
      width: 98.92,
      height: 77.72,
    },
    {
      id: 28,
      href: "/statement-forbidden-section2",
      title: "statement-forbidden-section1",
      x: 1151.68,
      y: 4435.38,
      width: 90.09,
      height: 86.55,
    },
    {
      id: 29,
      href: "/statement-forbidden-section3",
      title: "statement-forbidden-section3",
      x: 1142.85,
      y: 5336.24,
      width: 98.92,
      height: 88.32,
    },
    {
      id: 30,
      href: "/statement-forbidden-section4",
      title: "statement-forbidden-section4",
      x: 1153.45,
      y: 6245.93,
      width: 91.85,
      height: 90.09,
    },
    {
      id: 31,
      href: "/statement-forbidden-section5",
      title: "statement-forbidden-section5",
      x: 1156.98,
      y: 7153.85,
      width: 84.79,
      height: 90.09,
    },
    {
      id: 32,
      href: "/statement-forbidden-section6",
      title: "statement-forbidden-section6",
      x: 1156.98,
      y: 8063.53,
      width: 83.02,
      height: 86.55,
    },
    {
      id: 33,
      href: "/statement-forbidden-section7",
      title: "statement-forbidden-section7",
      x: 1158.75,
      y: 8976.75,
      width: 84.79,
      height: 90.09,
    },
    {
      id: 34,
      href: "/statement-forbidden-section8",
      title: "statement-forbidden-section8",
      x: 1151.68,
      y: 9879.37,
      width: 88.32,
      height: 91.85,
    },
    {
      id: 35,
      href: "/statement-forbidden-section9",
      title: "statement-forbidden-section9",
      x: 1141.08,
      y: 10790.83,
      width: 98.92,
      height: 95.38,
    },
    {
      id: 36,
      href: "/statement-forbidden-section10",
      title: "statement-forbidden-section10",
      x: 1146.38,
      y: 11698.75,
      width: 100.68,
      height: 95.38,
    },
    {
      id: 37,
      href: "/statement-forbidden-section11",
      title: "statement-forbidden-section11",
      x: 1149.91,
      y: 12606.67,
      width: 91.85,
      height: 91.85,
    },

    // Statement Internal Server Error sections
    {
      id: 38,
      href: "/statement-internal-server-error",
      title: "statement-internal-server-error",
      x: 1513.79,
      y: 2778.52,
      width: 97.15,
      height: 77.72,
    },
    {
      id: 39,
      href: "/statement-internal-server-error-section1",
      title: "statement-internal-server-error-section1",
      x: 1510.26,
      y: 3688.21,
      width: 97.15,
      height: 84.79,
    },
    {
      id: 40,
      href: "/statement-internal-server-error-section2",
      title: "statement-internal-server-error-section2",
      x: 1517.32,
      y: 4601.42,
      width: 88.32,
      height: 77.72,
    },
    {
      id: 41,
      href: "/statement-internal-server-error-section3",
      title: "statement-internal-server-error-section3",
      x: 1513.79,
      y: 5502.28,
      width: 91.85,
      height: 86.55,
    },
    {
      id: 42,
      href: "/statement-internal-server-error-section4",
      title: "statement-internal-server-error-section4",
      x: 1508.49,
      y: 6411.97,
      width: 97.15,
      height: 88.32,
    },
    {
      id: 43,
      href: "/statement-internal-server-error-section5",
      title: "statement-internal-server-error-section5",
      x: 1517.32,
      y: 7319.89,
      width: 84.79,
      height: 84.79,
    },
    {
      id: 44,
      href: "/statement-internal-server-error-section6",
      title: "statement-internal-server-error-section6",
      x: 1519.09,
      y: 8231.34,
      width: 84.79,
      height: 79.49,
    },
    {
      id: 45,
      href: "/statement-internal-server-error-section7",
      title: "statement-internal-server-error-section7",
      x: 1519.09,
      y: 9139.26,
      width: 88.32,
      height: 90.09,
    },
    {
      id: 46,
      href: "/statement-internal-server-error-section8",
      title: "statement-internal-server-error-section8",
      x: 1515.56,
      y: 10041.88,
      width: 93.62,
      height: 86.55,
    },
    {
      id: 47,
      href: "/statement-internal-server-error-section9",
      title: "statement-internal-server-error-section9",
      x: 1504.96,
      y: 10939.2,
      width: 100.68,
      height: 104.22,
    },
    {
      id: 48,
      href: "/statement-internal-server-error-section10",
      title: "statement-internal-server-error-section10",
      x: 1513.79,
      y: 11859.49,
      width: 88.32,
      height: 91.85,
    },
    {
      id: 49,
      href: "/statement-internal-server-error-section11",
      title: "statement-internal-server-error-section11",
      x: 1506.72,
      y: 12778.01,
      width: 98.92,
      height: 91.85,
    },
  ];

  // Calculate responsive scaling
  const getScaledCoordinates = (area: ClickableArea): ScaledCoordinates => {
    const baseWidth = 1860;
    const baseHeight = 13047;

    return {
      left: `${(area.x / baseWidth) * 100}%`,
      top: `${(area.y / baseHeight) * 100}%`,
      width: `${(area.width / baseWidth) * 100}%`,
      height: `${(area.height / baseHeight) * 100}%`,
    };
  };
  const router = useRouter();
  const buttons = [
    { label: "OB API Data model", path: "/statement-api-data-model" },
    { label: "Sequence Diagram", path: "/statement-sequence-diagram" },
    {
      label: "Operations End Points",
      path: "/statement-operations-end-points",
    },
    { label: "Decision Tree", path: "/statement-decision-tree" },
  ];

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const glossaryData = [
    { key: "OB", value: "Open Banking" },
    { key: "TPP", value: "Third Party Provider" },
    { key: "AISP", value: "Account Initiation Service Provider" },
    { key: "PSU", value: "Payment Services User (end user/customer)" },
    { key: "PISP", value: "Payment Initiation Service Provider" },
    { key: "ASPSP", value: "Account Service Payment Service Provider" },
    { key: "ID", value: "Identifier" },
    { key: "CoF", value: "Confirmation of funds" },
    { key: "BCA", value: "Business Current Account" },
    { key: "PCA", value: "Personal Current Account" },
    { key: "TLS", value: "Transport Layer Security" },
    { key: "mTLS", value: "Mutual Transport Layer Security" },
    { key: "SSA", value: "Software Statement Assertion" },
    { key: "PAN", value: "Primary Account Number (like a card number)" },
    { key: "OBIE", value: "Open Banking Implementation Entity" },
    { key: "PKI", value: "Public Key Infrastructure" },
    { key: "VRP", value: "Variable Recurring Payment" },
    {
      key: "eIDAS",
      value:
        "Electronic Identification, Authentication and Trust Services (EU regulation for secure electronic transactions)",
    },
    { key: "SCA", value: "Strong Customer Authentication" },
    { key: "AHS", value: "Accountant Help Squad (Our Platform)" },
  ];
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: isMobile ? "100%" : "1860px",
        margin: "0 auto",
        backgroundColor: "background.paper",
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: theme.shadows[3],
      }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={"backDirection"}
          width={40}
          height={40}
          onClick={() => {}}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "inherit" }}
        >
          Open Banking Core Platform / Accounting Aggregation consumer service /
          Statement
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleClick}>
            <Box mr={1}>GLOSSARY</Box>
            <Image src={glossary} width={40} height={40} alt="glossaryIcon" />
          </IconButton>
        </Box>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              position: "absolute",
              m: 0,
              borderRadius: 2,
              width: 350,
              right: 12,
              p: "2px",
            },
          }}
        >
          <DialogContent sx={{ border: "3px dotted black" }}>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {glossaryData.map((item, index) => (
                <Box component="li" key={index} mb={1}>
                  <Typography variant="body2">
                    <strong>{item.key}</strong> = {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </DialogContent>
        </Dialog>
      </Stack>
      <Box
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={2}
        justifyContent="end"
        alignItems="center"
        flexWrap="wrap"
        sx={{ p: 2 }}
      >
        {buttons.map((btn, index) => (
          <Button
            key={index}
            onClick={() => router.push(btn.path)}
            variant="contained"
            sx={{
              backgroundColor: "#4E4A61",
              color: "#fff",
              textTransform: "none",
              px: 3,
              py: 1.5,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "#3e3b52",
              },
              borderRadius: "8px",
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "16px",
              },
            }}
          >
            {btn.label}
          </Button>
        ))}
      </Box>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src={statement}
          alt="Statement Document"
          width={1860}
          height={13047}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
          priority
        />

        {/* Clickable Areas Overlay */}
        {clickableAreas.map((area) => {
          const coords = getScaledCoordinates(area);

          return (
            <Tooltip
              key={area.id}
              title={area.title}
              placement="top"
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                  },
                },
                arrow: {
                  sx: {
                    color: "primary.main",
                  },
                },
              }}
            >
              <Link href={area.href} passHref legacyBehavior>
                <Box
                  component="a"
                  sx={{
                    position: "absolute",
                    ...coords,
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    borderRadius: "4px",
                    transition: "all 0.2s ease-in-out",
                    zIndex: 10,
                  }}
                  onMouseEnter={() => setHoveredArea(area.id)}
                  onMouseLeave={() => setHoveredArea(null)}
                  aria-label={area.title}
                />
              </Link>
            </Tooltip>
          );
        })}
      </Box>

      {/* Legend/Status Bar */}
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "background.paper",
          borderTop: `1px solid ${theme.palette.divider}`,
          padding: theme.spacing(1, 2),
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 20,
        }}
      >
        <Box sx={{ typography: "body2", color: "text.secondary" }}>
          {hoveredArea
            ? clickableAreas.find((area) => area.id === hoveredArea)?.title
            : "Hover over sections to see details"}
        </Box>
        <Box sx={{ typography: "caption", color: "text.disabled" }}>
          {clickableAreas.length} clickable sections
        </Box>
      </Box>
    </Box>
  );
};

export default StatementImageMap;
