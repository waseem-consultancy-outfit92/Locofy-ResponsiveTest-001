import { AdditionalFormForGPs01Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGPs01Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 1: Service provider details`}
			src={AdditionalFormForGPs01Image}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGPs01Page;
