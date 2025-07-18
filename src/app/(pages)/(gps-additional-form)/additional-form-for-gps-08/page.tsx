import { AdditionalFormForGPs08Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGPs08Page = () => {
	return (
		<CommonPage
			pageTitle={`Signature`}
			src={AdditionalFormForGPs08Image}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGPs08Page;
