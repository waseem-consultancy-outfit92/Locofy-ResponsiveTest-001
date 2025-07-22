"use client";
import {
  FirstSentinelBrokerDocumentAQSEListingProposalOverviewImage,
  ReferenceDocImage,
} from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import {
  Stack,
  Typography,
  Box,
  Tooltip,
  Link,
  Button,
  Dialog,
  Modal,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
interface ImageMapArea {
  x: number;
  y: number;
  width: number;
  height: number;
  href: string;
  title: string;
}
const FirstSentinelBrokerDocumentPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const imageWidth = 1844;
  const imageHeight = 5704;

  const areas: ImageMapArea[] = [
    {
      x: 96.31528964862298,
      y: 2287.0503323836656,
      width: 285.4434947768281,
      height: 52.53561253561247,
      href: "/first-sentinel-market-comparison",
      title: "Market Comparison",
    },
    {
      x: 87.55935422602089,
      y: 4197.595441595442,
      width: 618.1690408357075,
      height: 59.540360873694226,
      href: "/first-sentinel-ipo-high-level-timeline",
      title: "IPO High-Level Timeline (Activity vs. Weeks)",
    },
    {
      x: 92.81291547958214,
      y: 4637.1433998100665,
      width: 425.5384615384615,
      height: 47.282051282050816,
      href: "/first-sentinel-the-costs",
      title: "Cost Estimate & Fee Structure",
    },
  ];
  return (
    <>
      <Stack sx={{ px: 5, py: 2 }}>
        <Stack
          direction={{ md: "row", xs: "column" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            mt={{ md: 2, xs: 1 }}
            mb={{ md: 4, sm: 3, xs: 2 }}
          >
            <Image
              src={CommonBackIcon}
              alt={""}
              width={40}
              height={40}
              onClick={() => {
                router.replace("/aqse-documents");
              }}
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
              First sentinel broker document AQSE listing proposal overview{" "}
            </Typography>
          </Stack>
          <Button
            variant="text"
            sx={{
              textDecoration: "underline",
              color: "#0246BC",
              fontWeight: "semi-bold",
              fontSize: 40,
            }}
            onClick={() => {
              window.open(
                "https://orcalo-my.sharepoint.com/personal/faisal_naeem_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffaisal%5Fnaeem%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FAQSE%20Listing%20Propsal%20%2D%20First%20Sentinel%20%283%29%201%2Epdf&parent=%2Fpersonal%2Ffaisal%5Fnaeem%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1",
                "_blank",
              );
            }}
          >
            Reference Doc
          </Button>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box mb={{ md: 4, sm: 3, xs: 2 }}>
            <CheckboxForm onChange={() => {}} />
          </Box>
          <Button
            variant="text"
            sx={{
              fontWeight: "semi-bold",
              fontSize: { md: "2.5rem", xs: "1rem" },
              color: "#5A5867",
            }}
            endIcon={
              <ExpandCircleDownOutlinedIcon
                sx={{ width: { md: 40, xs: 20 }, height: { md: 40, xs: 20 } }}
              />
            }
            onClick={() => {
              setOpen(true);
            }}
          >
            Key Terms
          </Button>
        </Stack>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            overflow: "hidden",
          }}
        >
          {/* Image */}
          <Image
            src={FirstSentinelBrokerDocumentAQSEListingProposalOverviewImage}
            alt="AQSE Listing Proposal Overview"
            width={imageWidth}
            height={imageHeight}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />

          {/* Clickable areas with tooltips */}
          {areas.map((area, index) => (
            <Link
              key={index}
              href={area.href}
              target="_parent"
              sx={{
                position: "absolute",
                left: `${(area.x / imageWidth) * 100}%`,
                top: `${(area.y / imageHeight) * 100}%`,
                width: `${(area.width / imageWidth) * 100}%`,
                height: `${(area.height / imageHeight) * 100}%`,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "2px solid white",
                  cursor: "pointer",
                  opacity: 0.2,
                },
              }}
            />
          ))}
        </Box>
      </Stack>
      <Modal
        onClose={() => {
          setOpen(false);
        }}
        open={open}
        sx={{
          height: "fit-content",
          width: "fit-content",
          top: { md: 180, xs: 250 },
          left: { md: 1000, xs: 0 },
          border: "dashed",
        }}
      >
        <Box sx={{ p: 2, background: "white" }}>
          <Image
            src={ReferenceDocImage}
            alt="Reference Image"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Modal>
    </>
  );
};

export default FirstSentinelBrokerDocumentPage;
