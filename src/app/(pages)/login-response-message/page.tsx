import { LoginResponseMessageImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const LoginResponseMessagePage = () => {
  return (
    <CommonPage
      pageTitle={`Login Response Message`}
      src={LoginResponseMessageImage}
      backRoute="/aquis-trading-protocol-atp-specification"
    />
  );
};

export default LoginResponseMessagePage;
