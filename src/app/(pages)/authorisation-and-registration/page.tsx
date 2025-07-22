import { AuthorisationAndRegistrationImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AuthorisationAndRegistrationPage = () => {
  return (
    <CommonPage
      pageTitle={`Diagram of Close Links`}
      src={AuthorisationAndRegistrationImage}
      backRoute="/FCAChapter3Authorisationandregistration"
    />
  );
};

export default AuthorisationAndRegistrationPage;
