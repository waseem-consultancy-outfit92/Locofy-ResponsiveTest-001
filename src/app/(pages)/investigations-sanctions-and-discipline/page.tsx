import { InvestigationsSanctionsAndDisciplineImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const InvestigationsSanctionsAndDisciplinePage = () => {
  return (
    <CommonPage
      pageTitle={`Investigations, Sanctions And Discipline`}
      src={InvestigationsSanctionsAndDisciplineImage}
      backRoute="/access-rulebook"
    />
  );
};

export default InvestigationsSanctionsAndDisciplinePage;
