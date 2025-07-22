"use client";
import { Chapter9Capitalresourcesandrequirements } from "@/assets";
import MultiImagesAmendmentComparisonBtnOne from "@/components/common-page-one-btn";
import { Box } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
 
const clickableAreas = [
  {
    title: "Initial capital requirements",
    route: "/initial-capital-requirements",
    coords: { left: 20, top: 1053, width: 495, height: 87 },
  },
  {
    title: "Overview of Own Funds (Diagram)",
    route: "/overview-of-own-funds",
    coords: { left: 47, top: 13390, width: 643, height: 89 },
  },
  {
    title: "Common Equity Tier 1 (CET1) Capital (Diagram)",
    route: "/common-equlty-tier-1",
    coords: { left: 46, top: 14100, width: 830, height: 90 },
  },
  {
    title: "Additional Tier 1 capital (Diagram)",
    route: "/additional-tier-1-capital",
    coords: { left: 46, top: 15541, width: 637, height: 85 },
  },
  {
    title: "Breakdown of Tier 2 Capital (Diagram)",
    route: "/tier-2-capital",
    coords: { left: 46, top: 16504, width: 690, height: 92 },
  },
];
 
const ElectronicsPage = () => {
  const router = useRouter();
 
  const handleCheckboxChange = (selectedValue: string, page: string) => {
    console.log(`Selected: ${selectedValue} on page: ${page}`);
  };
 
  // const imagesData =
 
  return (
    <Box sx={{ maxWidth: "1800px", margin: "0 auto", p: 2 }}>
      <MultiImagesAmendmentComparisonBtnOne
        backRoute="/payment-services-and-electronic-money-our-approach"
        pageTitle="FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 9: Capital resources and requirements"
        onChange={handleCheckboxChange}
      />
 
      <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src={Chapter9Capitalresourcesandrequirements.src}
          alt="Section Image Map"
          width={1798}
          height={17263}
          style={{ width: "100%", height: "auto" }}
        />
 
        {clickableAreas.map((area, index) => {
          return (
            <Box
              key={index}
              title={area.title}
              onClick={() => router.push(area.route)}
              sx={{
                position: "absolute",
                left: `${(area.coords.left / 1798) * 100}%`,
                top: `${(area.coords.top / 17263) * 100}%`,
                width: `${(area.coords.width / 1798) * 100}%`,
                height: `${(area.coords.height / 17263) * 100}%`,
                cursor: "pointer",
                zIndex: 10,
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};
 
export default ElectronicsPage;
 
 
