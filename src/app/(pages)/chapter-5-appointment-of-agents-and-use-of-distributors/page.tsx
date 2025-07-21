import { Chapter5AppointmentOfAgentsAndUseOfDistributorsImage } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const Chapter5AppointmentOfAgentsAndUseOfDistributorsPage = () => {
  return (
    <CommonPage
      pageTitle={`FCA Application / FCA Guide to Payment Services and Electronic Money Regulation / Chapter 5: Appointment of agents and use of distributors`}
      src={Chapter5AppointmentOfAgentsAndUseOfDistributorsImage}
      backRoute="/payment-services-and-electronic-money-our-approach"
    />
  );
};

export default Chapter5AppointmentOfAgentsAndUseOfDistributorsPage;
