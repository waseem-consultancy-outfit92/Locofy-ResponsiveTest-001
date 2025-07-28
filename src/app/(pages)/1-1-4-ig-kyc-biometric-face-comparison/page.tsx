import { IgKycBiometricFaceComparisonImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgKycBiometricFaceComparisonPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgKycBiometricFaceComparisonImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgKycBiometricFaceComparisonPage;
