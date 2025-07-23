import { MemberParticipationAgreementImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MemberParticipationAgreementPage = () => {
  return (
    <CommonPage
      pageTitle={`Member Participation Agreement`}
      src={MemberParticipationAgreementImage}
      backRoute="/legal-agreements"
    />
  );
};

export default MemberParticipationAgreementPage;
