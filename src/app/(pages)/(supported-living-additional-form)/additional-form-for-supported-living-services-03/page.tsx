import { AdditionalFormForSupportedLivingServices03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForSupportedLivingServices03Page = () => {
	return (
		<CommonPage
			pageTitle={` Section 2: Existing Provider (If you’re restructuring business and changing your legal entity)`}
			src={AdditionalFormForSupportedLivingServices03Image}
			backRoute="/supported-living-additional-form"
		/>
	);
};

export default AdditionalFormForSupportedLivingServices03Page;
