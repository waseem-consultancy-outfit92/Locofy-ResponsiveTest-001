import { IgSkillAssessmentImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgSkillAssessmentPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgSkillAssessmentImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgSkillAssessmentPage;
