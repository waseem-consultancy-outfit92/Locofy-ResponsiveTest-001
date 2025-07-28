import { Dashboard521Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Dashboard521Page = () => {
  return (
    <CommonPage
      pageTitle={`Dashboard 5.2.1`}
      src={Dashboard521Image}
      backRoute="/ig-product-diagram-release-1"
    />
  );
};

export default Dashboard521Page;
