import { AdmissionDocumentAppendixIImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdmissionDocumentAppendixIPage = () => {
  return (
    <CommonPage
      pageTitle={`Admission Document (Appendix I)`}
      src={AdmissionDocumentAppendixIImage}
      backRoute="/access-rulebook"
    />
  );
};

export default AdmissionDocumentAppendixIPage;
