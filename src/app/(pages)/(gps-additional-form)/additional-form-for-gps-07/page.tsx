import { AdditionalFormForGPs07Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGPs07Page = () => {
	return (
		<CommonPage
			pageTitle={`Supporting Documents`}
			src={AdditionalFormForGPs07Image}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGPs07Page;
