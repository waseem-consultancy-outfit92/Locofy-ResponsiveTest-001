import { MulticastImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MulticastPage = () => {
  return (
    <CommonPage
      pageTitle={`Multicast`}
      src={MulticastImage}
      backRoute="/connectivity-guide"
    />
  );
};

export default MulticastPage;
