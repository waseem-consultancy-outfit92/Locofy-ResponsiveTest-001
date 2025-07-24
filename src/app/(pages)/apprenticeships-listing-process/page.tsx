"use client";

import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import ListingImage from "@/assets/ListingProcessDiagram.png";

const imageWidth = 1860;
const imageHeight = 2281;

const clickableAreas = [
  {
    title: "Provides Application Form",
    href: "/application-form",
    coords: { left: 145, top: 348, width: 281, height: 46 },
  },
  {
    title: "Conduct Initial Assessment",
    href: "/onboarding-and-support-assessment",
    coords: { left: 285, top: 500, width: 307, height: 51 },
  },
  {
    title: "DAS guidelines",
    href: "/das-guidance",
    coords: { left: 495, top: 651, width: 168, height: 51 },
  },
  {
    title: "Funding rules",
    href: "/apprenticeship-funding-rules",
    coords: { left: 1590, top: 723, width: 172, height: 46 },
  },
  {
    title: "Sign levy/non levy arguments",
    href: "/wtd-non-levy-agreement-v1",
    coords: { left: 487, top: 882, width: 321, height: 48 },
  },
  {
    title: "Training Plan",
    href: "/apprenticeship-training-plan",
    coords: { left: 65, top: 1034, width: 176, height: 46 },
  },
  {
    title: "Appoints End point Assessment Organization",
    href: "/find-an-end-point-assessment-organisation-epao-for-you-apprentice",
    coords: { left: 791, top: 1431, width: 441, height: 43 },
  },
  {
    title: "Closes Learner record",
    href: "/wtd-how-to-close-down-completed-learners-on-das",
    coords: { left: 656, top: 1913, width: 235, height: 43 },
  },
  {
    title: "Conduct final funding audits",
    href: "/apprenticeship-funding-rules",
    coords: { left: 1255, top: 2013, width: 297, height: 48 },
  },
];

export default function ApprenticeshipsListingProcessPage() {
  const router = useRouter();
  const pageTitle = `Apprenticeships / Apprenticeships Listing Process`;
  const backRoute = "/apprenticeshipjourney-1";
  const relevantDiagramsRoute = "/apprenticeship";
  const amendmentComparisonRoute = "/overview-of-apprenticeship-delivery-process";

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  const onRelevantDiagramsClick = useCallback(() => {
    router.push(relevantDiagramsRoute);
  }, [router, relevantDiagramsRoute]);

  const onAmendmentButtonClick = useCallback(() => {
    router.push(amendmentComparisonRoute);
  }, [router, amendmentComparisonRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        mt={{ md: 2, xs: 4 }}
        mb={{ md: 4, sm: 3, xs: 4 }}
        gap={{ xs: 2, md: 0 }}
      >
        <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1}>
          <Image
            src={CommonBackIcon}
            alt={pageTitle}
            width={40}
            height={40}
            onClick={onBackIconClick}
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
            {pageTitle}
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "stretch", md: "center" }}
        justifyContent="space-between"
        spacing={2}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Box flex={1}>
          <CheckboxForm />
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={2}
          ml={{ md: "auto" }}
        >
          <Button
            variant="contained"
            onClick={onRelevantDiagramsClick}
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
            Apprenticeships Breakdown
          </Button>
          <Button
            variant="contained"
            onClick={onAmendmentButtonClick}
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
            Apprenticeships Overview
          </Button>
        </Box>
      </Stack>

      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src={ListingImage.src}
          alt={pageTitle}
          width={imageWidth}
          height={imageHeight}
          style={{ width: "100%", height: "auto" }}
        />
        {clickableAreas.map((area, index) => (
          <Box
            key={index}
            component="a"
            href={area.href}
            title={area.title}
            target="_self"
            sx={{
              position: "absolute",
              left: `${(area.coords.left / imageWidth) * 100}%`,
              top: `${(area.coords.top / imageHeight) * 100}%`,
              width: `${(area.coords.width / imageWidth) * 100}%`,
              height: `${(area.coords.height / imageHeight) * 100}%`,
              zIndex: 10,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
