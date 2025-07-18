import { AdditionalFormForSupportedLivingServices02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForSupportedLivingServices02Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 1: Service provider details`}
			src={AdditionalFormForSupportedLivingServices02Image}
			backRoute="/supported-living-additional-form"
		/>
	);
};

export default AdditionalFormForSupportedLivingServices02Page;
