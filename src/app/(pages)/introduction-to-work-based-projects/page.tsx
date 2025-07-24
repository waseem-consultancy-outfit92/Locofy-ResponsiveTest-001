"use client";

import React from "react";
import { Box } from "@mui/material";
import { IntroductionToWorkBasedProjectsImage } from "@/assets";
import AmendmentComparison from "@/components/amendment-comparison";
import Image from "next/image";

const clickableAreas = [
  {
    title: "LinkedIn Learning",
    href: "https://www.mmu.ac.uk/isds/support/apps/linkedin-learning/",
    coords: { left: 91, top: 9155, width: 252, height: 51 },
  },
  {
    title: "CMI Resources",
    href: "https://www.managers.org.uk/individuals/existingmembers/managementdirect",
    coords: { left: 464, top: 9154, width: 212, height: 34 },
  },
  {
    title: "CMI Events And Courses",
    href: "https://www.managers.org.uk/community/events/",
    coords: { left: 794, top: 9152, width: 245, height: 56 },
  },
  {
    title: "Mui Library Search",
    href: "https://www.mmu.ac.uk/library/search-tools/library-search",
    coords: { left: 1158, top: 9155, width: 243, height: 53 },
  },
  {
    title: "SCONUL Access",
    href: "https://access.sconul.ac.uk/",
    coords: { left: 1524, top: 9180, width: 209, height: 44 },
  },
];

const ORIGINAL_WIDTH = 1856; // Set this to your actual SVG width
const ORIGINAL_HEIGHT = 12646; // Set this to your actual SVG height

const IntroductionToWorkBasedProjectsPage = () => {
  return (
    <Box sx={{ maxWidth: "1800px", margin: "0 auto", p: 2 }}>
      <AmendmentComparison
        pageTitle="Apprenticeship Journey / Apprenticeship Documents / Introduction to Work-Based Projects"
        src={IntroductionToWorkBasedProjectsImage}
        backRoute="/training-delivery-off-the-job-learning"
        amendmentButtonRoute="https://orcalo-my.sharepoint.com/:b:/g/personal/muneeb_asif_consultancyoutfit_co_uk/EXAMPLE_ID?e=xyz"
      />

      {/* Image Map Overlay */}
      <Box sx={{ position: "relative", width: "100%", mt: 2 }}>
        <Image
          src={IntroductionToWorkBasedProjectsImage}
          alt="Interactive Map"
          style={{ width: "100%", height: "auto" }}
          width={1856}
          height={12646}
        />

        {clickableAreas.map((area, index) => (
          <Box
            key={index}
            component="a"
            href={area.href}
            title={area.title}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "absolute",
              left: `${(area.coords.left / 1856) * 100}%`,
              top: `${(area.coords.top / 12646) * 100}%`,
              width: `${(area.coords.width / 1856) * 100}%`,
              height: `${(area.coords.height / 12646) * 100}%`,
              zIndex: 10,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.5)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default IntroductionToWorkBasedProjectsPage;
