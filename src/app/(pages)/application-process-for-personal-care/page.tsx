import React from 'react'
import { ApplicationProcessForPersonalCarePage } from '@/assets';
import CommonImgMapPage from '@/components/common-img-map-page';

const areas = [
    {
        alt: " Register as a Provider",
        title: "Register as a Provider",
        href: "/new-provider-application-breakdown",
        coords: "20,34,455,111",
        shape: "rect",
    },
    {
        alt: " Register a Manager (if needed)",
        title: "Register a Manager (if needed)",
        href: "/manager-registration",
        coords: "811,26,1367,113",
        shape: "rect",
    },
    {
        alt: " Add the Care Activities",
        title: "Add the Care Activities",
        href: "/add-remove-regulated-activities",
        coords: "20,310,456,390",
        shape: "rect",
    },
    {
        alt: "Add a Service Location",
        title: "Add a Service Location",
        href: "/manage-location",
        coords: "822,310,1259,385",
        shape: "rect",
    },
    {
        alt: "Include Supporting Service Details",
        title: "Include Supporting Service Details",
        href: "/specific-type-of-services",
        coords: "17,596,602,665",
        shape: "rect",
    },
    {
        alt: " Insurance Confirmation",
        title: "Insurance Confirmation",
        href: "/insurance-supporting-information",
        coords: "16,980,474,1060",
        shape: "rect",
    },
    {
        alt: "Add Conditions or Notices (if applicable)",
        title: "Add Conditions or Notices (if applicable)",
        href: "/add-remove-condition-and-notice-process-flow",
        coords: "783,975,1442,1052",
        shape: "rect",
    },
];


const ApplicationProcessForPersonalCare = () => {
    return (
        <CommonImgMapPage
            backRoute="/care-quality-commission-regulated-services"
            pageTitle="Application Process for Care Activities(CQC Regulated Activity)"
            image={ApplicationProcessForPersonalCarePage}
            areas={areas}
        />
    )
}

export default ApplicationProcessForPersonalCare;