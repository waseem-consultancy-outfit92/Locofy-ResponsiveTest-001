import { AdditionalFormForGPs06Image } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const AdditionalFormForGPs06Page = () => {
	return (
		<CommonPage
			pageTitle={`Position Statement Letter`}
			src={AdditionalFormForGPs06Image}
			backRoute="/gps-additional-form"
		/>
	);
};

export default AdditionalFormForGPs06Page;
