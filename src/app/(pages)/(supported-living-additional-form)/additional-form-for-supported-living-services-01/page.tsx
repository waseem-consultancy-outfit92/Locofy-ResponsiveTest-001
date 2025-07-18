import { AdditionalFormForSupportedLivingServices01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForSupportedLivingServices01Page = () => {
	return (
		<CommonPage
			pageTitle={`Additional form for supported living services`}
			src={AdditionalFormForSupportedLivingServices01Image}
			backRoute="/supported-living-additional-form"
		/>
	);
};

export default AdditionalFormForSupportedLivingServices01Page;
