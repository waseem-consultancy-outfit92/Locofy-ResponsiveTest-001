"use client";
import { FcaApplicationEMoneyNewAuthorisationRegistrationAemiImage1 } from "@/assets";
import MultiImagesAmendmentComparisonBtn from "@/components/common-page-multi-images-two-amendment-btn";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const clickableAreas = [
  {
    title: "Identification details and timings",
    route: "/identification-details-and-timings-sec1",
    coords: [19, 573, 706, 648],
  },
  {
    title: "Other Trading Names",
    route: "/other-names-sec1",
    coords: [32, 1932, 347, 2022],
  },
  {
    title: "Addresses",
    route: "/addresses-sec1",
    coords: [365, 1932, 669, 1993],
  },
  {
    title: "Timings",
    route: "/timings-for-this-application-sec1",
    coords: [30, 2259, 342, 2406],
  },
  {
    title: "Professional Advisers",
    route: "/details-of-professional-advisers-sec1",
    coords: [368, 2463, 928, 2524],
  },
  {
    title: "Section 2",
    route: "/programme-of-operations-sec1",
    coords: [11, 2974, 643, 3048],
  },
  {
    title: "Section 3",
    route: "/unrelated-payment-services-sec1",
    coords: [17, 3971, 669, 4039],
  },
  {
    title: "Section 4",
    route: "/business-plan-attachments-sec1",
    coords: [11, 5033, 639, 5104],
  },
  {
    title: "Section 5",
    route: "/structural-organisation-sec1",
    coords: [12, 5936, 571, 6008],
  },
  {
    title: "Section 6",
    route: "/evidence-of-initial-capital-sec1",
    coords: [14, 6823, 608, 6896],
  },
  {
    title: "Safeguard Funds",
    route: "/measures-to-safeguard-the-funds-of-payment-service-users-sec1",
    coords: [16, 7468, 1063, 7543],
  },
  {
    title: "Unrelated Payment Services 2",
    route: "/unrelated-payment-services-sec2",
    coords: [27, 8322, 538, 8394],
  },
  {
    title: "Governance",
    route: "/governance-arrangements-and-internal-control-mechanisms-sec2",
    coords: [14, 9119, 1095, 9193],
  },
  {
    title: "Regulatory Returns",
    route: "/regulatory-returns-regdata-sec2",
    coords: [17, 10331, 1386, 10403],
  },
  {
    title: "Sensitive Data",
    route:
      "/procedure-to-monitor-handle-and-follow-up-on-security-incidents-and-complaints-sec2",
    coords: [16, 11220, 878, 11295],
  },
  {
    title: "Business Continuity",
    route:
      "/procedure-to-monitor-handle-and-follow-up-on-security-incidents-and-complaints-sec3",
    coords: [16, 12452, 742, 12522],
  },
  {
    title: "Statistical Definitions",
    route: "/business-continuity-arrangements-sec3",
    coords: [16, 13407, 1023, 13481],
  },
  {
    title: "Security Policy",
    route: "/principles-and-definitions-for-statistical-data-collection-sec3",
    coords: [16, 14335, 626, 14405],
  },
  {
    title: "AML Control",
    route: "/security-policy-document-sec3",
    coords: [16, 16218, 1469, 16289],
  },
  {
    title: "Qualifying Holdings",
    route:
      "/internal-control-mechanisms-for-money-laundering-and-terrorist-financing-compliance-sec3",
    coords: [14, 17448, 1257, 17517],
  },
  {
    title: "Directors Assessment",
    route:
      "/identity-and-suitability-assessment-of-persons-with-qualifying-holdings-in-the-applicant-sec3",
    coords: [12, 18428, 1512, 18502],
  },
  {
    title: "Auditors",
    route: "/identity-of-statutory-auditors-and-audit-firms-sec3",
    coords: [12, 19113, 914, 19185],
  },
  {
    title: "Insurance",
    route: "/professional-indemnity-insurance-or-comparable-guarantee-sec3",
    coords: [14, 19792, 713, 19864],
  },
  {
    title: "Fees and Levies",
    route: "/fees-and-levies-sec3",
    coords: [17, 20870, 675, 20944],
  },
];

const FcaApplicationEMoneyNewAuthorisationRegistrationAemiPage = () => {
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
        <Image
          src={FcaApplicationEMoneyNewAuthorisationRegistrationAemiImage1.src}
          alt="Section Image Map"
          width={1856}
          height={18116}
          style={{ width: "100%", height: "auto" }}
        />

        {/* Overlay Clickable Areas */}
        {clickableAreas.map((area, index) => {
          const [x1, y1, x2, y2] = area.coords;
          return (
            <Box
              key={index}
              title={area.title}
              onClick={() => router.push(area.route)}
              sx={{
                position: "absolute",

                left: `${(x1 / 1856) * 100}%`,
                top: `${(y1 / 18116) * 100}%`,
                width: `${(x2 - x1 / 1856) * 100}%`,
                height: `${(y2 - y1 / 18116) * 100}%`,
                cursor: "pointer",
                zIndex: 10,
                // border: "1px dashed red", // uncomment for debugging
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default FcaApplicationEMoneyNewAuthorisationRegistrationAemiPage;
