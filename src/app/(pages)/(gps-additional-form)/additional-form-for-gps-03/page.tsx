import { AdditionalFormForGPs03Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGPs03Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 3: Sale or Transfer`}
			src={AdditionalFormForGPs03Image}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGPs03Page;
