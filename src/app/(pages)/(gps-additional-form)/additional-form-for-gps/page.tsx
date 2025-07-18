import { AdditionalFormForGpsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGpsPage = () => {
	return (
		<CommonPage
			pageTitle={`Additional form for GPs`}
			src={AdditionalFormForGpsImage}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGpsPage;
