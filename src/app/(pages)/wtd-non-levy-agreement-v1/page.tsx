import { WtdNonLevyAgreementV1Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const WtdNonLevyAgreementV1Page = () => {
  return (
    <CommonPage
      pageTitle={`WTD Levy & Non-Levy Agreement V1`}
      src={WtdNonLevyAgreementV1Image}
      backRoute="/apprenticeship-roles-and-form-guide"
      amendmentButtonRoute="https://orcalo-my.sharepoint.com/:w:/g/personal/saqib_hussain_consultancyoutfit_co_uk/EWzxbP4XvjNOh8NrpcWpfDABWIVnxR86xFZhiJUP1ktw6g?e=XqfbyD"
    />
  );
};

export default WtdNonLevyAgreementV1Page;
