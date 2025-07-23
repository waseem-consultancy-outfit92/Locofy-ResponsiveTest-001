import { NoticeOfProposalRepresentationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const NoticeOfProposalRepresentationPage = () => {
  return (
    <CommonPage
      pageTitle={` Notice of Proposal Representation`}
      src={NoticeOfProposalRepresentationImage}
      backRoute="/add-remove-condition-and-notice-process-flow"
    />
  );
};

export default NoticeOfProposalRepresentationPage;
