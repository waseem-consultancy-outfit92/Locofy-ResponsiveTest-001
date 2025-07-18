import { AdditionalFormForGPs04Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGPs04Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 4: Legal Representative (All Providers)`}
			src={AdditionalFormForGPs04Image}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGPs04Page;
