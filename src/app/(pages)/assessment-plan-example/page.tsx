"use client";

import { AssessmentPlanExampleImage } from "@/assets";
import { CommonPage } from "@/components";
import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const clickableAreas = [
  {
    title: "Approved Academic",
    href: "https://www.engc.org.uk/resources-and-guidance/education-and-skills/course-search",
    coords: { left: 1588, top: 5663, width: 189, height: 28 },
  },
];


const AssessmentPlanExamplePage = () => {
  return (
    <>
    <CommonPage
      pageTitle={`Apprenticeship Journey  / Apprenticeship Documents  / Assessment Plan Example`}
      src={AssessmentPlanExampleImage}
      backRoute="/portfolio-assessment-evidence-cards"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/personal/danish_qamar_consultancyoutfit_co_uk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fdanish%5Fqamar%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2FAssessment%20Plan%20Example%2Epdf&parent=%2Fpersonal%2Fdanish%5Fqamar%5Fconsultancyoutfit%5Fco%5Fuk%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files&ga=1"
    />
    <Box sx={{ position: "relative", width: "100%" }}>
        <Image
          src={AssessmentPlanExampleImage.src}
          alt="Assessment Plan Example"
          width={1856}
          height={10130}
          style={{ width: "100%", height: "auto" }}
        />

        {/* Clickable areas as overlay boxes */}
        {clickableAreas.map((area, idx) => (
          <Box
            key={idx}
            component="a"
            href={area.href}
            title={area.title}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "absolute",
              left: `${(area.coords.left / 1856) * 100}%`,
              top: `${(area.coords.top / 10130) * 100}%`,
              width: `${(area.coords.width / 1856) * 100}%`,
              height: `${(area.coords.height / 10130) * 100}%`,
              zIndex: 10,
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
      </>

  );
};

export default AssessmentPlanExamplePage;
