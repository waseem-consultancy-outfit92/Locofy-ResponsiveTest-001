"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import PaymentServicesRAISP from "@/assets/PaymentServicesRAISP.svg";
import Image from "next/image";
import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";

const clickableAreas = [
  {
    title: "RAISP",
    route: "/raisp-registration-account-information-service-provider",
    coords: { left: -1, top: 3, width: 937, height: 74 },
  },
  {
    title: "Section 1",
    route: "/section-1-identification-details-and-timings",
    coords: { left: 27, top: 2450, width: 692, height: 66 },
  },
  {
    title: "Other Trading Names",
    route: "/other-trading-names",
    coords: { left: 39, top: 4108, width: 318, height: 92 },
  },
  {
    title: "Addresses",
    route: "/addresses",
    coords: { left: 380, top: 4108, width: 235, height: 62 },
  },
  {
    title: "Advisers",
    route: "/details-of-professional-advisers",
    coords: { left: 380, top: 4640, width: 564, height: 64 },
  },
  {
    title: "Timings",
    route: "/timings-for-this-applicationtime-factor",
    coords: { left: 40, top: 4433, width: 319, height: 150 },
  },
  {
    title: "Section 2",
    route: "/section-2-programme-of-operations",
    coords: { left: 30, top: 5128, width: 621, height: 67 },
  },
  {
    title: "Section 3",
    route: "/section-3-business-plan",
    coords: { left: 27, top: 6285, width: 470, height: 72 },
  },
  {
    title: "Section 4",
    route: "/section-4-structural-organisation",
    coords: { left: 30, top: 7392, width: 559, height: 73 },
  },
  {
    title: "Section 5",
    route: "/section-5-governance-arrangements-and-internal-control-mechanisms",
    coords: { left: 30, top: 8281, width: 1080, height: 69 },
  },
  {
    title: "Section 6",
    route:
      "/section-6-procedure-to-monitor-handle-and-follow-up-on-security-incidents-and-complaints",
    coords: { left: 30, top: 9551, width: 1377, height: 73 },
  },
  {
    title: "Section 7",
    route:
      "/section-7-process-in-place-to-file-monitor-track-and-restrict-access-to-sensitive-payment-data",
    coords: { left: 29, top: 10443, width: 1408, height: 76 },
  },
  {
    title: "Section 8",
    route: "/section-8-business-continuity-arrangements",
    coords: { left: 32, top: 11682, width: 700, height: 74 },
  },
  {
    title: "Section 9",
    route: "/section-9-security-policy-document",
    coords: { left: 30, top: 12644, width: 600, height: 74 },
  },
  {
    title: "Section 10",
    route:
      "/section-10-identity-and-suitability-assessment-of-directors-and-persons-responsible-for-management",
    coords: { left: 30, top: 14393, width: 1496, height: 61 },
  },
  {
    title: "Section 11",
    route: "/section-11-professional-indemnity-insurance-requirements",
    coords: { left: 29, top: 15197, width: 961, height: 74 },
  },
  {
    title: "Section 12",
    route: "/section-12-fees-and-levies",
    coords: { left: 32, top: 16183, width: 611, height: 74 },
  },
];

const RAISPImageMapComponent = () => {
  const router = useRouter();

  return (
    <Box sx={{ maxWidth: "1800px", margin: "0 auto", p: 2 }}>
      <MultiImagesAmendmentComparisonBtn
        pageTitle="FCA Application/E-Money New Authorisation &  Registration / AEMI"
        backRoute="/e-money-new-authorisation-registration"
        amendmentButtonRoute1="fca-application-e-money-new-authorisation-registration-aemi"
        amendmentButtonTitle1="Reference Doc"
        amendmentButtonRoute2="terms-in-application-pack-sec3"
        amendmentButtonTitle2="KEY TERMS"
        downloadUrl="https://orcalo-my.sharepoint.com/:b:/g/personal/muhammad-rutab_sohail_consultancyoutfit_co_uk/EbTYOfv4Xv9FnRSzgJnvU4UB4AbqCar-GmVjJx2NksxqTw?e=wb80Vr"
        downloadFileName="FCA_Reference_Doc.pdf"
      />

      <Box sx={{ position: "relative", width: "100%" }}>
        {/* Base Image */}
        <Image
          src={PaymentServicesRAISP.src}
          alt="RAISP Registration"
          width={1856}
          height={18116}
          style={{ width: "100%", height: "auto" }}
        />
        {clickableAreas.map((area, index) => (
          <Box
            key={index}
            title={area.title}
            onClick={() => router.push(area.route)}
            sx={{
              position: "absolute",
              left: `${(area.coords.left / 1856) * 100}%`,
              top: `${(area.coords.top / 18116) * 100}%`,
              width: `${(area.coords.width / 1856) * 100}%`,
              height: `${(area.coords.height / 18116) * 100}%`,
              cursor: "pointer",
              zIndex: 10,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RAISPImageMapComponent;
