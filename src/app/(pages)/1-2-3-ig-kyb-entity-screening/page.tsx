import { IgKybEntityScreeningImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const IgKybEntityScreeningPage = () => {
  return (
    <CommonPage
      pageTitle={``}
      src={IgKybEntityScreeningImage}
      backRoute="/ig-release-2"
    />
  );
};

export default IgKybEntityScreeningPage;
