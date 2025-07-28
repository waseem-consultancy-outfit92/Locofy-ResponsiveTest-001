"use client";

import React, { useRef, useState } from "react";
import {
  Box,
  Tooltip,
  Typography,
  Button,
  Stack,
  IconButton,
  Modal,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import { ColorLegendsKeyImage, IGRelease2Image } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";

interface ImageMapArea {
  x: number;
  y: number;
  width: number;
  height: number;
  href: string;
  title: string;
  target?: "_blank" | "_parent" | "_self";
}

export default function IGReleaseImageMap() {
  const router = useRouter();
  const [isLegendOpen, setIsLegendOpen] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const originalImageWidth = 1844;
  const originalImageHeight = 2748;

  const areas: ImageMapArea[] = [
    {
      x: 94.56,
      y: 292.45,
      width: 199.64,
      height: 131.34,
      href: "/1-1-1-ig-kyc-registry-screening",
      title: "Registry Screening",
      target: "_parent",
    },
    {
      x: 388.76,
      y: 292.45,
      width: 182.12,
      height: 134.84,
      href: "/1-1-2-ig-kyc-email-risk-scoring",
      title: "Email Risk Scoring",
      target: "_parent",
    },
    {
      x: 681.21,
      y: 290.7,
      width: 218.9,
      height: 141.85,
      href: "/1-1-3-ig-kyc-negative-media-screening",
      title: "Negative Media Screening",
      target: "_parent",
    },
    {
      x: 199.64,
      y: 441.3,
      width: 243.42,
      height: 140.09,
      href: "/1-1-4-ig-kyc-biometric-face-comparison",
      title: "Biometric Face Comparison",
      target: "_parent",
    },
    {
      x: 560.38,
      y: 443.05,
      width: 182.12,
      height: 131.34,
      href: "/1-1-5-ig-kyc-geolocation",
      title: "Geo Location",
      target: "_parent",
    },
    {
      x: 1006.93,
      y: 280.19,
      width: 241.66,
      height: 145.35,
      href: "/1-2-1-ig-kyb-ubo-ultimate-beneficiary-owner",
      title: "Ultimate beneficiary owner (UBO)",
      target: "_parent",
    },
    {
      x: 1301.13,
      y: 273.19,
      width: 194.38,
      height: 127.84,
      href: "/1-2-2-ig-kyb-sanction-screening",
      title: "Sanction Screening",
      target: "_parent",
    },
    {
      x: 1549.8,
      y: 257.42,
      width: 197.88,
      height: 136.59,
      href: "/1-2-3-ig-kyb-entity-screening",
      title: "Entity Screening",
      target: "_parent",
    },
    {
      x: 1017.44,
      y: 446.55,
      width: 211.89,
      height: 129.59,
      href: "/1-2-4-ig-kyb-transaction-screening",
      title: "Transaction Screening",
      target: "_parent",
    },
    {
      x: 1288.87,
      y: 429.04,
      width: 196.13,
      height: 154.1,
      href: "/1-2-5-ig-kyb-kym-know-your-merchant",
      title: "Know your merchant (KYM)",
      target: "_parent",
    },
    {
      x: 1551.55,
      y: 436.05,
      width: 218.9,
      height: 141.85,
      href: "/1-2-6-ig-kyb-sdd-supplier-due-diligence",
      title: "Supplier Due Diligence",
      target: "_parent",
    },
    {
      x: 75.3,
      y: 656.7,
      width: 318.72,
      height: 56.04,
      href: "/1-3-ig-kyt-know-your-transactions",
      title: "AML Compliance",
      target: "_parent",
    },
    {
      x: 443.05,
      y: 660.2,
      width: 453.56,
      height: 49.03,
      href: "/1-4-ig-digital-identity-verification",
      title: "Digital Identity Verification",
      target: "_parent",
    },
    {
      x: 453.56,
      y: 717.99,
      width: 180.37,
      height: 157.61,
      href: "/1-4-1-ig-nfc-identity-verification",
      title: "NFC Identity Verification",
      target: "_parent",
    },
    {
      x: 691.72,
      y: 721.49,
      width: 224.15,
      height: 155.86,
      href: "/1-4-2-ig-multiple-address-verification",
      title: "Multiple Address Verification",
      target: "_parent",
    },
    {
      x: 966.66,
      y: 660.2,
      width: 364.25,
      height: 49.03,
      href: "/1-5-ig-social-media-checks",
      title: "Social Media Checks",
      target: "_parent",
    },
    {
      x: 973.66,
      y: 728.49,
      width: 206.64,
      height: 126.09,
      href: "/1-5-1-ig-adverse-media-screening",
      title: "Adverse Media",
      target: "_parent",
    },
    {
      x: 1225.83,
      y: 726.74,
      width: 197.88,
      height: 127.84,
      href: "/1-5-2-ig-proxy-detection",
      title: "Proxy Detection",
      target: "_parent",
    },
    {
      x: 1499.02,
      y: 667.2,
      width: 250.42,
      height: 75.3,
      href: "/1-6-ig-identity-investigation",
      title: "Identity Investigation",
      target: "_parent",
    },
    {
      x: 1518.28,
      y: 784.53,
      width: 189.13,
      height: 134.84,
      href: "/1-6-1-ig-debt-tracking",
      title: "Debt Tracking",
      target: "_parent",
    },
    {
      x: 1504.27,
      y: 999.93,
      width: 220.65,
      height: 147.1,
      href: "/1-6-2-ig-work-behaviour",
      title: "Work Behavior",
      target: "_parent",
    },
    {
      x: 61.29,
      y: 942.14,
      width: 453.56,
      height: 54.29,
      href: "/1-7-ig-pre-employment-screening",
      title: "Pre-Employment Screening",
      target: "_parent",
    },
    {
      x: 59.54,
      y: 1010.43,
      width: 201.39,
      height: 148.85,
      href: "/1-7-1-ig-employment-reference-check",
      title: "Employment Reference",
      target: "_parent",
    },
    {
      x: 288.95,
      y: 1008.68,
      width: 206.64,
      height: 145.35,
      href: "/1-7-2-ig-certificate-screening",
      title: "Certification Screening",
      target: "_parent",
    },
    {
      x: 523.6,
      y: 1001.68,
      width: 194.38,
      height: 147.1,
      href: "/1-7-3-ig-skill-assessment",
      title: "Skill Assessment",
      target: "_parent",
    },
    {
      x: 779.28,
      y: 938.64,
      width: 332.73,
      height: 54.29,
      href: "/1-8-ig-reference-checks",
      title: "Reference Checks",
      target: "_parent",
    },
    {
      x: 78.8,
      y: 1416.71,
      width: 439.55,
      height: 66.55,
      href: "/2-1-ig-individual-user-employee",
      title: "Individual user (Employee)",
      target: "_parent",
    },
    {
      x: 85.81,
      y: 1709.16,
      width: 446.55,
      height: 50.78,
      href: "/2-2-ig-company-admin",
      title: "Company Admin Features",
      target: "_parent",
    },
    {
      x: 89.31,
      y: 2029.63,
      width: 409.78,
      height: 54.29,
      href: "/2-2-3-ig-companyadmin-subscription-invoices",
      title: "Subscription & Invoices",
      target: "_parent",
    },
    {
      x: 775.78,
      y: 1005.18,
      width: 190.88,
      height: 145.35,
      href: "/1-8-1-ig-employer-reference",
      title: "Employer Reference",
      target: "_parent",
    },
    {
      x: 1003.43,
      y: 999.93,
      width: 203.14,
      height: 126.09,
      href: "/1-8-2-ig-landlord-reference",
      title: "Landlord Reference",
      target: "_parent",
    },
    {
      x: 1238.09,
      y: 989.42,
      width: 201.39,
      height: 162.86,
      href: "/1-8-3-ig-send-ig-verification-email",
      title: "Reference Letter Screening",
      target: "_parent",
    },
    {
      x: 245.17,
      y: 1849.25,
      width: 140.09,
      height: 122.58,
      href: "/2-2-1-ig-companyadmin-select-user",
      title: "Select User",
      target: "_parent",
    },
    {
      x: 1383.44,
      y: 1837.0,
      width: 211.89,
      height: 126.09,
      href: "/2-2-2-ig-companyadmin-servicereports",
      title: "Services Reports",
      target: "_parent",
    },
    {
      x: 89.31,
      y: 2097.92,
      width: 171.62,
      height: 122.58,
      href: "/2-2-3-1-ig-companyadmin-subscription",
      title: "Subscription",
      target: "_parent",
    },
    {
      x: 921.12,
      y: 2087.42,
      width: 180.37,
      height: 145.35,
      href: "/2-2-3-2-2-ig-companyadmin-pay-invoices",
      title: "Invoices",
      target: "_parent",
    },
    {
      x: 1199.56,
      y: 2090.92,
      width: 211.89,
      height: 155.86,
      href: "/2-2-3-3-ig-companyadmin-payment-methods",
      title: "Payment Methods",
      target: "_parent",
    },
    {
      x: 119.08,
      y: 2343.09,
      width: 217.15,
      height: 134.84,
      href: "/2-2-3-2-1-ig-companyadmin-view-invoices",
      title: "View Invoice",
      target: "_parent",
    },
    {
      x: 422.04,
      y: 2343.09,
      width: 199.64,
      height: 140.09,
      href: "/2-2-3-2-2-ig-companyadmin-pay-invoices",
      title: "Pay Invoice",
      target: "_parent",
    },
  ];

  const handleAreaClick = (href: string, target?: string) => {
    if (target === "_blank") {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      router.push(href);
    }
  };

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
          Identity Gram
        </Typography>
        <Box
          ref={imageContainerRef}
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <Image
            src={IGRelease2Image}
            alt="IG Release 2 Features Diagram"
            width={originalImageWidth}
            height={originalImageHeight}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            priority
          />

          {areas.map((area, index) => (
            <Tooltip key={index} title={area.title} arrow placement="right">
              <Box
                onClick={() => handleAreaClick(area.href, area.target)}
                sx={{
                  position: "absolute",
                  left: `${(area.x / originalImageWidth) * 100}%`,
                  top: `${(area.y / originalImageHeight) * 100}%`,
                  width: `${(area.width / originalImageWidth) * 100}%`,
                  height: `${(area.height / originalImageHeight) * 100}%`,
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    border: "2px solid white",
                    cursor: "pointer",
                  },
                }}
              />
            </Tooltip>
          ))}
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
}
