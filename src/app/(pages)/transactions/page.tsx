"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  DialogContent,
  Typography,
  Dialog,
  IconButton,
  styled,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { transactions } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { glossary } from "@/assets";

// Styled components
const ClickableArea = styled(Box)(() => ({
  position: "absolute",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  zIndex: 10, // Ensure it’s clickable
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "2px solid white",
  },
}));

const ImageMapContainer = styled(Box)({
  position: "relative",
  width: "100%",
  maxWidth: "1860px",
  margin: "0 auto",
});

const TransactionImageMap = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getResponsiveStyle = ({ x, y, width, height }: any) => ({
    left: `${(x / 1860) * 100}%`,
    top: `${(y / 10208) * 100}%`,
    width: `${(width / 1860) * 100}%`,
    height: `${(height / 10208) * 100}%`,
  });

  const handleAreaClick = (href: string) => {
    if (href && href !== "#") {
      router.push(href);
    }
  };
  const clickableAreas = [
    {
      href: "/transactions-read",
      title: "transactions-read",
      style: getResponsiveStyle({
        x: 91.85,
        y: 2656.63,
        width: 75.95,
        height: 77.72,
      }),
    },
    {
      href: "/transactions-read-section1",
      title: "transactions-read-section1",
      style: getResponsiveStyle({
        x: 90.08,
        y: 3543.36,
        width: 83.01,
        height: 77.72,
      }),
    },
    {
      href: "/transactions-read-section2",
      title: "transactions-read-section2",
      style: getResponsiveStyle({
        x: 91.85,
        y: 5307.97,
        width: 77.72,
        height: 83.01,
      }),
    },
    {
      href: "/transactions-read-section3",
      title: "transactions-read-section3",
      style: getResponsiveStyle({
        x: 90.08,
        y: 6194.7,
        width: 81.25,
        height: 88.31,
      }),
    },
    {
      href: "/transactions-read-section4",
      title: "transactions-read-section4",
      style: getResponsiveStyle({
        x: 91.85,
        y: 7962.84,
        width: 79.48,
        height: 75.95,
      }),
    },
    {
      href: "/transactions-read-section5",
      title: "transactions-read-section5",
      style: getResponsiveStyle({
        x: 90.08,
        y: 8851.33,
        width: 77.72,
        height: 79.48,
      }),
    },

    {
      href: "/transactions-bad-request",
      title: "transactions-bad-request",
      style: getResponsiveStyle({
        x: 436.29,
        y: 2649.57,
        width: 86.55,
        height: 77.72,
      }),
    },
    {
      href: "/transactions-bad-request-section1",
      title: "transactions-bad-request-section1",
      style: getResponsiveStyle({
        x: 434.52,
        y: 3538.06,
        width: 95.38,
        height: 79.48,
      }),
    },
    {
      href: "/transactions-bad-request-section2",
      title: "transactions-bad-request-section2",
      style: getResponsiveStyle({
        x: 430.99,
        y: 4408.88,
        width: 93.61,
        height: 88.31,
      }),
    },
    {
      href: "/transactions-bad-request-section3",
      title: "transactions-bad-request-section3",
      style: getResponsiveStyle({
        x: 430.99,
        y: 5302.67,
        width: 97.15,
        height: 90.08,
      }),
    },
    {
      href: "/transactions-bad-request-section4",
      title: "transactions-bad-request-section4",
      style: getResponsiveStyle({
        x: 423.93,
        y: 6187.63,
        width: 104.21,
        height: 93.61,
      }),
    },
    {
      href: "/transactions-bad-request-section5",
      title: "transactions-bad-request-section5",
      style: getResponsiveStyle({
        x: 434.52,
        y: 7074.35,
        width: 90.08,
        height: 81.25,
      }),
    },
    {
      href: "/transactions-bad-request-section6",
      title: "transactions-bad-request-section6",
      style: getResponsiveStyle({
        x: 441.59,
        y: 7957.54,
        width: 81.25,
        height: 84.78,
      }),
    },
    {
      href: "/transactions-bad-request-section7",
      title: "transactions-bad-request-section7",
      style: getResponsiveStyle({
        x: 427.46,
        y: 8838.97,
        width: 102.45,
        height: 100.68,
      }),
    },
    {
      href: "/transactions-bad-request-section8",
      title: "transactions-bad-request-section8",
      style: getResponsiveStyle({
        x: 427.46,
        y: 9729.23,
        width: 105.98,
        height: 98.91,
      }),
    },

    {
      href: "/transactions-forbidden",
      title: "transactions-forbidden",
      style: getResponsiveStyle({
        x: 1153.44,
        y: 2656.63,
        width: 97.15,
        height: 81.25,
      }),
    },
    {
      href: "/transactions-forbidden-section1",
      title: "transactions-forbidden-section1",
      style: getResponsiveStyle({
        x: 1156.98,
        y: 3545.12,
        width: 91.85,
        height: 72.42,
      }),
    },
    {
      href: "/transactions-forbidden-section2",
      title: "transactions-forbidden-section2",
      style: getResponsiveStyle({
        x: 1149.91,
        y: 4423.01,
        width: 97.15,
        height: 81.25,
      }),
    },
    {
      href: "/transactions-forbidden-section3",
      title: "transactions-forbidden-section3",
      style: getResponsiveStyle({
        x: 1149.91,
        y: 5304.44,
        width: 100.68,
        height: 81.25,
      }),
    },
    {
      href: "/transactions-forbidden-section4",
      title: "transactions-forbidden-section4",
      style: getResponsiveStyle({
        x: 1151.68,
        y: 6189.4,
        width: 95.38,
        height: 83.01,
      }),
    },
    {
      href: "/transactions-forbidden-section5",
      title: "transactions-forbidden-section5",
      style: getResponsiveStyle({
        x: 1155.21,
        y: 7074.35,
        width: 90.08,
        height: 83.01,
      }),
    },
    {
      href: "/transactions-forbidden-section6",
      title: "transactions-forbidden-section6",
      style: getResponsiveStyle({
        x: 1146.38,
        y: 7952.25,
        width: 102.45,
        height: 90.08,
      }),
    },
    {
      href: "/transactions-forbidden-section7",
      title: "transactions-forbidden-section7",
      style: getResponsiveStyle({
        x: 1155.21,
        y: 8835.44,
        width: 95.38,
        height: 86.55,
      }),
    },
    {
      href: "/transactions-forbidden-section8",
      title: "transactions-forbidden-section8",
      style: getResponsiveStyle({
        x: 1158.74,
        y: 9729.23,
        width: 95.38,
        height: 91.85,
      }),
    },

    {
      href: "/transactions-internal-server-error",
      title: "transactions-internal-server-error",
      style: getResponsiveStyle({
        x: 1519.08,
        y: 2808.54,
        width: 88.31,
        height: 84.78,
      }),
    },
    {
      href: "/transactions-internal-server-error-section1",
      title: "transactions-internal-server-error-section1",
      style: getResponsiveStyle({
        x: 1517.32,
        y: 3697.03,
        width: 91.85,
        height: 75.95,
      }),
    },
    {
      href: "/transactions-internal-server-error-section2",
      title: "transactions-internal-server-error-section2",
      style: getResponsiveStyle({
        x: 1513.78,
        y: 4580.22,
        width: 97.15,
        height: 77.72,
      }),
    },
    {
      href: "/transactions-internal-server-error-section3",
      title: "transactions-internal-server-error-section3",
      style: getResponsiveStyle({
        x: 1513.78,
        y: 5465.18,
        width: 93.61,
        height: 72.42,
      }),
    },
    {
      href: "/transactions-internal-server-error-section4",
      title: "transactions-internal-server-error-section4",
      style: getResponsiveStyle({
        x: 1515.55,
        y: 6348.37,
        width: 93.61,
        height: 75.95,
      }),
    },
    {
      href: "/transactions-internal-server-error-section5",
      title: "transactions-internal-server-error-section5",
      style: getResponsiveStyle({
        x: 1513.78,
        y: 7228.03,
        width: 95.38,
        height: 91.85,
      }),
    },
    {
      href: "/transactions-internal-server-error-section6",
      title: "transactions-internal-server-error-section6",
      style: getResponsiveStyle({
        x: 1515.55,
        y: 8112.99,
        width: 95.38,
        height: 90.08,
      }),
    },
    {
      href: "/transactions-internal-server-error-section7",
      title: "transactions-internal-server-error-section7",
      style: getResponsiveStyle({
        x: 1496.12,
        y: 9012.07,
        width: 118.34,
        height: 88.31,
      }),
    },
    {
      href: "/transactions-internal-server-error-section8",
      title: "transactions-internal-server-error-section8",
      style: getResponsiveStyle({
        x: 1515.55,
        y: 9875.84,
        width: 104.21,
        height: 97.15,
      }),
    },
  ];

  const buttons = [
    { label: "OB API Data model", path: "/transaction-api-data-model" },
    { label: "Sequence Diagram", path: "/transaction-sequence-diagram" },
    { label: "Decision Tree", path: "/transaction-decision-tree" },
  ];

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
    <Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mt={2}
        mb={4}
      >
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
            Transactions
          </Typography>
        </Box>
        <IconButton onClick={() => setOpen(true)}>
          <Box mr={1}>GLOSSARY</Box>
          <Image src={glossary} width={40} height={40} alt="glossaryIcon" />
        </IconButton>
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 350, p: 1 } }}
      >
        <DialogContent sx={{ border: "3px dotted black" }}>
          <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
            {glossaryData.map((item, idx) => (
              <Box component="li" key={idx} mb={1}>
                <Typography variant="body2">
                  <strong>{item.key}</strong> = {item.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </DialogContent>
      </Dialog>

      <Box
        display="flex"
        gap={2}
        justifyContent="end"
        alignItems="end"
        flexWrap="wrap"
        p={2}
      >
        {buttons.map((btn, idx) => (
          <Button
            key={idx}
            onClick={() => router.push(btn.path)}
            variant="contained"
            sx={{
              backgroundColor: "#4E4A61",
              color: "#fff",
              textTransform: "none",
              px: 3,
              py: 1.5,
              fontWeight: 600,
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: "#3e3b52",
              },
            }}
          >
            {btn.label}
          </Button>
        ))}
      </Box>

      <ImageMapContainer>
        <Image
          src={transactions}
          alt="Transaction Flow"
          width={1856}
          height={10206}
          style={{ width: "100%", height: "auto", display: "block" }}
          priority
        />
        {clickableAreas.map((area, idx) => (
          <ClickableArea
            key={idx}
            sx={area.style}
            onClick={() => handleAreaClick(area.href)}
            title={area.title}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleAreaClick(area.href);
              }
            }}
          />
        ))}
      </ImageMapContainer>
    </Box>
  );
};

export default TransactionImageMap;
