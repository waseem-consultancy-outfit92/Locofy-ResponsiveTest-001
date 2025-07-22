import { AuthorisationAndRegistrationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AuthorisationAndRegistrationPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Authorisation and registration`}
      src={AuthorisationAndRegistrationImage}
      backRoute="/fcachapter3authorisationandregistration"
    />
  );
};

export default AuthorisationAndRegistrationPage;
