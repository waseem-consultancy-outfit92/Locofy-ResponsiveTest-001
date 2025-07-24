import { RewardsIncentivesImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const RewardsIncentivesPage = () => {
  return (
    <CommonPage
      pageTitle={`Web 3 / Categories / Rewards & Incentives `}
      src={RewardsIncentivesImage}
      backRoute="/web3-applications-in-crypto-categories"
    />
  );
};

export default RewardsIncentivesPage;
