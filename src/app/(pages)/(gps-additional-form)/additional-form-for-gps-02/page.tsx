import { AdditionalFormForGPs02Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGPs02Page = () => {
	return (
		<CommonPage
			pageTitle={`Section 2: Existing Provider (if you’re restructuring business and are changing your legal entity)`}
			src={AdditionalFormForGPs02Image}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGPs02Page;
