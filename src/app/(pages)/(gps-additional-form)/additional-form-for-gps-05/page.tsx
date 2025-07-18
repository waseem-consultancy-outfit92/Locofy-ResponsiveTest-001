import { AdditionalFormForGPs05Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGPs05Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 5: Services You Will Provide`}
			src={AdditionalFormForGPs05Image}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGPs05Page;
