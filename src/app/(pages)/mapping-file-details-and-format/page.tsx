import { MappingFileDetailsAndFormatImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const MappingFileDetailsAndFormatPage = () => {
  return (
    <CommonPage
      pageTitle={`Mapping File Details and Format`}
      src={MappingFileDetailsAndFormatImage}
      backRoute="/aquis-short-code-upload-specification"
    />
  );
};

export default MappingFileDetailsAndFormatPage;
