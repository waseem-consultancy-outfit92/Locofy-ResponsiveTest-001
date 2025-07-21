"use client";
import {
  Chapter9Capitalresourcesandrequirements,
  Chapter9Capitalresourcesandrequirementsup2,
  DiagramAdditionalTier1capital,
  DiagramBreakdownofTier2Capital,
  DiagramCommonEquityTier1CET1Capital,
  DiagramOverviewofOwnFunds,
  Initialcapitalrequirementslink,
} from "@/assets";
import MultiImagesNoBtn from "@/components/multi-images-no-btn";
import { Box } from "@mui/material";

const ElectronicsPage = () => {
  const handleCheckboxChange = (selectedValue: string, page: string) => {
    console.log(`Selected: ${selectedValue} on page: ${page}`);
  };

  // const imagesData =

  return (
    <Box>
      <MultiImagesNoBtn
        backRoute="/payment-services-and-electronic-money-our-approach"
        pageTitle="FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 9: Capital resources and requirements"
        images={[
          {
            src: Chapter9Capitalresourcesandrequirements,
            alt: "Modern TV",
            route: "/FCAChapter3Authorisationandregistration",
          },
          {
            src: Initialcapitalrequirementslink,
            alt: "Modern TV",
            route: "/initial-capital-requirements",
          },
          {
            src: Chapter9Capitalresourcesandrequirementsup2,
            alt: "Modern TV",
            route: "/FCAChapter3Authorisationandregistration",
          },
          {
            src: DiagramOverviewofOwnFunds,
            alt: "Modern TV",
            route: "/fca-application-safeguarding-figure1",
          },
          {
            src: DiagramCommonEquityTier1CET1Capital,
            alt: "Modern TV",
            route: "/fca-application-safeguarding-figure2",
          },
          {
            src: DiagramAdditionalTier1capital,
            alt: "Modern TV",
            route: "/fca-application-safeguarding-figure3",
          },
          {
            src: DiagramBreakdownofTier2Capital,
            alt: "Modern TV",
            route: "/fca-application-safeguarding-figure4",
          },
        ]}
        onChange={handleCheckboxChange}
      />
    </Box>
  );
};

export default ElectronicsPage;
