"use client";
import { Sc1ApplicationForRegistrationAsANewProviderOfRegulatedActivitiesImage } from "@/assets";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { useRouter } from "next/navigation";
const Sc1ApplicationForRegistrationAsANewProviderOfRegulatedActivitiesPage =
  () => {
    const router = useRouter();
    const links = [
      {
        href: "/statement-on-data-protection",
        title: "Statement on Data Protection",
        position: {
          left: "4.94%",
          top: "2.52%",
          width: "23.94%",
          height: "0.31%",
        },
      },
      {
        href: "/statement-of-purpose",
        title: "Statement of Purpose",
        position: {
          left: "53.29%",
          top: "2.52%",
          width: "17.86%",
          height: "0.34%",
        },
      },
      {
        href: "/where-the-applicant-is-an-organisation",
        title: "1 Where the applicant is an organisation",
        position: {
          left: "5.32%",
          top: "6.21%",
          width: "29.92%",
          height: "0.29%",
        },
      },
      {
        href: "/where-the-applicant-is-an-organisation",
        title: "The organisation's name and contact details",
        position: {
          left: "7.6%",
          top: "6.77%",
          width: "33.44%",
          height: "0.28%",
        },
      },
      {
        href: "/alternative-temporary-correspondence-address-section1",
        title: "Alternative temporary correspondence address",
        position: {
          left: "55.95%",
          top: "6.76%",
          width: "36.86%",
          height: "0.36%",
        },
      },
      {
        href: "/is-your-organisation-a-subsidiary-of-another-company",
        title: "Is your organisation a subsidiary of another company?",
        position: {
          left: "7.69%",
          top: "9.03%",
          width: "40.46%",
          height: "0.31%",
        },
      },
      {
        href: "/more-information-about-parent-and-subsidiary-companies",
        title: "More information about parent and subsidiary companies",
        position: {
          left: "53.67%",
          top: "9.03%",
          width: "39.14%",
          height: "0.51%",
        },
      },
      {
        href: "/is-your-organisation-a-franchise",
        title: "Is your organisation a franchise?",
        position: {
          left: "7.79%",
          top: "11.3%",
          width: "25.17%",
          height: "0.27%",
        },
      },
      {
        href: "/more-information-about-the-franchisor",
        title: "More information about the franchisor",
        position: {
          left: "55.66%",
          top: "11.3%",
          width: "31.06%",
          height: "0.28%",
        },
      },
      {
        href: "/directors-or-equivalent",
        title: "Directors or equivalent",
        position: {
          left: "7.79%",
          top: "13.51%",
          width: "18.43%",
          height: "0.28%",
        },
      },
      {
        href: "/declaration-on-meeting-regulation-5",
        title: "Declaration on meeting regulation 5",
        position: {
          left: "55.95%",
          top: "13.48%",
          width: "28.49%",
          height: "0.32%",
        },
      },
      {
        href: "/9-nominated-individuals",
        title: "Nominated individual(s)",
        position: {
          left: "8.07%",
          top: "15.58%",
          width: "17.76%",
          height: "0.29%",
        },
      },
      {
        href: "/professional-body-disciplinary-proceedings-other-investigations-or-bars-on-activity-by-the-disclosure-and-barring-service-dbs",
        title:
          "1.10 Professional body disciplinary proceedings, other investigations, or bars on activity by the Disclosure and Barring Service (DBS)",
        position: {
          left: "54.8%",
          top: "15.56%",
          width: "41.89%",
          height: "0.89%",
        },
      },
      {
        href: "/previous-registration-history-section1",
        title: "Previous registration history",
        position: {
          left: "8.36%",
          top: "17.75%",
          width: "21.56%",
          height: "0.31%",
        },
      },
      {
        href: "/the-applicants-name-and-contact-details",
        title: "Where the applicant is an individual",
        position: {
          left: "5.6%",
          top: "20.16%",
          width: "27.55%",
          height: "0.31%",
        },
      },
      {
        href: "/the-applicants-name-and-contact-details",
        title: "Name and Contact Details",
        position: {
          left: "7.6%",
          top: "20.67%",
          width: "20.61%",
          height: "0.36%",
        },
      },
      {
        href: "/alternative-temporary-correspondence-address",
        title: "Alternative temporary correspondence address",
        position: {
          left: "56.23%",
          top: "20.67%",
          width: "37.14%",
          height: "0.52%",
        },
      },
      {
        href: "/previous-history-as-a-registered-person",
        title: "Previous history as a registered person",
        position: {
          left: "8.26%",
          top: "22.97%",
          width: "30.3%",
          height: "0.32%",
        },
      },
      {
        href: "/employment-history-section2",
        title: "Employment History",
        position: {
          left: "56.32%",
          top: "22.94%",
          width: "17%",
          height: "0.34%",
        },
      },
      {
        href: "/day-to-day-management-of-regulated-activities",
        title: "Day-to-day management of regulated activities",
        position: {
          left: "8.26%",
          top: "25.19%",
          width: "37.23%",
          height: "0.42%",
        },
      },
      {
        href: "/medical-history-section1",
        title: "Medical History",
        position: {
          left: "56.14%",
          top: "25.16%",
          width: "15.67%",
          height: "0.42%",
        },
      },
      {
        href: "/gp-details-section1",
        title: "GP Details",
        position: {
          left: "8.17%",
          top: "27.46%",
          width: "10.54%",
          height: "0.29%",
        },
      },
      {
        href: "/qualifications-skills-and-experience",
        title: "Qualifications & Experience",
        position: {
          left: "56.32%",
          top: "27.46%",
          width: "21.47%",
          height: "0.31%",
        },
      },
      {
        href: "/declarations-by-a-health-or-social-care-professional",
        title: "Professional Declarations",
        position: {
          left: "8.26%",
          top: "29.71%",
          width: "19.76%",
          height: "0.29%",
        },
      },
      {
        href: "/disclosure-and-barring-service-criminal-records-disclosure",
        title:
          "2.10 Disclosure and Barring Service criminal records disclosure",
        position: {
          left: "54.14%",
          top: "29.69%",
          width: "40.08%",
          height: "0.58%",
        },
      },
      {
        href: "/reference",
        title: "Reference",
        position: {
          left: "8.64%",
          top: "31.82%",
          width: "9.02%",
          height: "0.32%",
        },
      },
      {
        href: "/is-your-business-a-franchise",
        title: "Is your business a franchise?",
        position: {
          left: "57.09%",
          top: "31.82%",
          width: "23.46%",
          height: "0.33%",
        },
      },
      {
        href: "/more-information-about-the-franchisor-section1",
        title: "More information about the franchisor",
        position: {
          left: "9.12%",
          top: "33.92%",
          width: "29.73%",
          height: "0.42%",
        },
      },
      {
        href: "/3-1-the-partnership-s-name-and-contact-details",
        title:
          "Where the applicant is a partnership /Additional section for information about a member of the partnership",
        position: {
          left: "5.41%",
          top: "36.34%",
          width: "84.34%",
          height: "0.36%",
        },
      },
      {
        href: "/3-1-the-partnership-s-name-and-contact-details",
        title: "Partner's Name & Contact Details",
        position: {
          left: "7.41%",
          top: "36.92%",
          width: "28.49%",
          height: "0.37%",
        },
      },
      {
        href: "/alternative-temporary-correspondence-address-section2",
        title: "Temporary Contact Details",
        position: {
          left: "55.28%",
          top: "36.96%",
          width: "23.65%",
          height: "0.27%",
        },
      },
      {
        href: "/is-your-partnership-a-franchise",
        title: "Is your partnership a franchise?",
        position: {
          left: "7.88%",
          top: "39.08%",
          width: "25.17%",
          height: "0.41%",
        },
      },
      {
        href: "/more-information-about-franchisor",
        title: "More information about franchisor",
        position: {
          left: "55.18%",
          top: "39.07%",
          width: "28.11%",
          height: "0.36%",
        },
      },
      {
        href: "/main-contact-partner-section1",
        title: "Main contact partner",
        position: {
          left: "8.07%",
          top: "41.21%",
          width: "16.91%",
          height: "0.42%",
        },
      },
      {
        href: "/partner-s-name-contact-details",
        title: "Partner's contact details",
        position: {
          left: "55.09%",
          top: "41.21%",
          width: "20.04%",
          height: "0.42%",
        },
      },
      {
        href: "/temporary-contact-details",
        title: "3.7 Alternative temporary contact details for this application",
        position: {
          left: "5.22%",
          top: "43.34%",
          width: "39.99%",
          height: "0.58%",
        },
      },
      {
        href: "/previous-history-as-a-registered-person-section1",
        title: "Previous history as a registered person",
        position: {
          left: "55.09%",
          top: "43.44%",
          width: "29.54%",
          height: "0.25%",
        },
      },
      {
        href: "/employment-history-section1",
        title: "Employment History",
        position: {
          left: "7.98%",
          top: "45.56%",
          width: "16.81%",
          height: "0.32%",
        },
      },
      {
        href: "/medical-history-section2",
        title: "Medical History",
        position: {
          left: "55.85%",
          top: "45.56%",
          width: "14.34%",
          height: "0.32%",
        },
      },
      {
        href: "/gp-details-section2",
        title: "GP Details",
        position: {
          left: "8.93%",
          top: "47.75%",
          width: "9.78%",
          height: "0.2%",
        },
      },
      {
        href: "/qualifications-skills-and-experience-section1",
        title: "Qualifications & Experience",
        position: {
          left: "56.04%",
          top: "47.75%",
          width: "22.13%",
          height: "0.19%",
        },
      },
      {
        href: "/declarations-professional-safeguarding",
        title: "Declarations by a health or social care professional",
        position: {
          left: "9.02%",
          top: "49.81%",
          width: "38.56%",
          height: "0.32%",
        },
      },
      {
        href: "/3-14-disclosure-barring-service-dbs",
        title: "Disclosure and Barring Service criminal records disclosure",
        position: {
          left: "56.23%",
          top: "49.81%",
          width: "35%",
          height: "0.41%",
        },
      },
      {
        href: "/reference-section1",
        title: "Reference",
        position: {
          left: "8.93%",
          top: "52.05%",
          width: "7.98%",
          height: "0.28%",
        },
      },
      {
        href: "/partner-s-signature-section1",
        title: "Partner's signature",
        position: {
          left: "55.66%",
          top: "52.07%",
          width: "15.1%",
          height: "0.22%",
        },
      },
      {
        // href: "",
        title: "Second partner's details",
        position: {
          left: "5.89%",
          top: "54.13%",
          width: "19.09%",
          height: "0.38%",
        },
      },
      {
        href: "/4-1-invoice-and-financial-contact-details",
        title: "Financial information",
        position: {
          left: "5.89%",
          top: "56.67%",
          width: "19.47%",
          height: "0.43%",
        },
      },
      {
        href: "/4-1-invoice-and-financial-contact-details",
        title: "Invoice and financial contact details",
        position: {
          left: "7.6%",
          top: "57.3%",
          width: "28.02%",
          height: "0.27%",
        },
      },
      {
        href: "/4-2-administration-receivership-and-other-insolvency-processes",
        title:
          "4.2 Administration, receivership, and other insolvency processes",
        position: {
          left: "53%",
          top: "57.27%",
          width: "41.6%",
          height: "0.56%",
        },
      },
      {
        href: "/4-3-financial-interests-in-registered-services",
        title: "Financial interests in registered services",
        position: {
          left: "8.45%",
          top: "59.42%",
          width: "31.44%",
          height: "0.31%",
        },
      },
      {
        href: "/4-4-essential-business-relationships-with-other-service-providers",
        title:
          "4.4 Essential business relationships with other service providers",
        position: {
          left: "52.81%",
          top: "59.47%",
          width: "42.36%",
          height: "0.6%",
        },
      },
      {
        href: "/section-5-the-regulated-activityactivities-you-want-to-provide-to-be-completed-by-all-applicants",
        title:
          "The locations you want to provide regulated activity/activities at or from",
        position: {
          left: "6.08%",
          top: "62.89%",
          width: "55.94%",
          height: "0.41%",
        },
      },
      {
        href: "/6-purchase-or-transfer-of-existing-locations",
        title:
          "The locations you want to provide regulated activity/activities at or from",
        position: {
          left: "5.7%",
          top: "65.35%",
          width: "56.89%",
          height: "0.43%",
        },
      },
      {
        href: "/6-purchase-or-transfer-of-existing-locations",
        title: "Purchase or transfer of existing location(s)",
        position: {
          left: "7.88%",
          top: "66.03%",
          width: "32.67%",
          height: "0.24%",
        },
      },
      {
        href: "/6-2-location-details",
        title: "Location details",
        position: {
          left: "55.47%",
          top: "65.96%",
          width: "12.82%",
          height: "0.36%",
        },
      },
      {
        href: "/6-3-planning-consent",
        title: "Planning Consent",
        position: {
          left: "8.64%",
          top: "68.07%",
          width: "13.49%",
          height: "0.44%",
        },
      },
      {
        href: "/6-4-building-regulations",
        title: "Building regulations",
        position: {
          left: "55.37%",
          top: "68.05%",
          width: "16.62%",
          height: "0.44%",
        },
      },
      {
        href: "/6-5-food-safety",
        title: "Food safety",
        position: {
          left: "8.55%",
          top: "70.22%",
          width: "9.59%",
          height: "0.44%",
        },
      },
      {
        href: "/6-6-safety-of-equipment-plant-and-utilities",
        title: "Safety of equipment, plant and utilities",
        position: {
          left: "55.37%",
          top: "70.29%",
          width: "31.91%",
          height: "0.36%",
        },
      },
      {
        href: "/6-7-landlordmortgage-lender-permission",
        title: "Landlord/Mortgage lender permission",
        position: {
          left: "8.17%",
          top: "72.38%",
          width: "29.73%",
          height: "0.43%",
        },
      },
      {
        href: "/6-8-location-readiness",
        title: "Location readiness",
        position: {
          left: "55.66%",
          top: "72.45%",
          width: "15.58%",
          height: "0.41%",
        },
      },
      {
        href: "/6-9-the-regulated-activities-you-propose-to-carry-on-at-this-location",
        title:
          "The regulated activities you propose to carry on at this location",
        position: {
          left: "8.45%",
          top: "74.55%",
          width: "37.52%",
          height: "0.57%",
        },
      },
      {
        href: "/6-10-the-service-types-provided-at-this-location",
        title: "The service types provided at this location",
        position: {
          left: "56.7%",
          top: "74.58%",
          width: "32.39%",
          height: "0.32%",
        },
      },
      {
        href: "/6-11-condition-of-registration-about-the-number-of-persons-accommodated-to-receive-nursing-or-personal-care-at-this-location",
        title: "Maximum occupancy for care",
        position: {
          left: "9.02%",
          top: "76.72%",
          width: "22.89%",
          height: "0.39%",
        },
      },
      {
        href: "/6-12-condition-of-registration-about-not-providing-nursing-care-at-this-location",
        title:
          "6.12 Condition of registration about not providing nursing care at this location",
        position: {
          left: "53.28%",
          top: "76.66%",
          width: "42.46%",
          height: "0.64%",
        },
      },
      {
        href: "/6-13-condition-of-registration-about-the-regulated-activity-or-activities-at-this-and-other-locations",
        title:
          "6.13 Condition of registration about the regulated activity (or activities) at this and other locations",
        position: {
          left: "6.08%",
          top: "78.82%",
          width: "42.93%",
          height: "0.65%",
        },
      },
      {
        href: "/6-14-service-user-bands",
        title: "Service user bands",
        position: {
          left: "56.42%",
          top: "78.92%",
          width: "15.58%",
          height: "0.25%",
        },
      },
      {
        href: "/6-15-condition-of-registration-about-providing-a-specialist-service-to-people-with-a-learning-disability-or-people-with-a-learning-disability-and-autism",
        title:
          "6.15 Condition of registration about providing a specialist service to people with a learning disability or people with a learning disability and autism.",
        position: {
          left: "5.79%",
          top: "80.99%",
          width: "82.63%",
          height: "0.71%",
        },
      },
      {
        href: "/section-7-how-you-will-provide-your-service-to-be-completed-by-all-applicants",
        title: "How you will provide your service",
        position: {
          left: "6.08%",
          top: "83.79%",
          width: "25.36%",
          height: "0.23%",
        },
      },
      {
        href: "/section-8-checklist-of-information-that-must-be-available-to-cqc-on-request-to-be-completed-by-all-applicants",
        title:
          "Checklist of information that must be available to CQC on request",
        position: {
          left: "5.98%",
          top: "85.96%",
          width: "49.96%",
          height: "0.51%",
        },
      },
      {
        href: "/section-9-partnerships-only-agreement-to-conditions-of-registration",
        title: "Partnerships only - Agreement to conditions of registration",
        position: {
          left: "5.89%",
          top: "88.26%",
          width: "45.4%",
          height: "0.31%",
        },
      },
      {
        href: "/section-10-supporting-notes",
        title: "Supporting Notes",
        position: {
          left: "6.65%",
          top: "90.44%",
          width: "15.1%",
          height: "0.34%",
        },
      },
      {
        href: "/section-11-application-declaration",
        title: "Application declaration",
        position: {
          left: "6.17%",
          top: "93.49%",
          width: "19.47%",
          height: "0.42%",
        },
      },
      {
        href: "/submission-section1",
        title: "Submission",
        position: {
          left: "7.12%",
          top: "95.61%",
          width: "9.02%",
          height: "0.43%",
        },
      },
    ];

    return (
      <Stack px={5} py={3} gap={2}>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          mt={{ md: 2, xs: 1 }}
          mb={{ md: 4, sm: 3, xs: 2 }}
        >
          <Image
            src={CommonBackIcon}
            alt={"backIcon"}
            width={40}
            height={40}
            onClick={() => {
              router.replace("/new-provider-application-breakdown");
            }}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h5"
            color="#5A5867"
            fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
            fontWeight={{ md: 600, xs: 500 }}
            ml={{ md: 2, xs: 1 }}
            sx={{
              fontFamily: "inherit",
            }}
          >
            SC1 - Application for registration as a new provider of regulated activities
          </Typography>
        </Stack>
        <CheckboxForm onChange={() => {}} />
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={
              Sc1ApplicationForRegistrationAsANewProviderOfRegulatedActivitiesImage
            }
            alt="Application form"
            width={1859}
            height={13893}
            style={{ width: "100%", height: "auto" }}
          />

          {links.filter(link => typeof link.href === "string").map((link, index) => (
            <NextLink key={index} href={link.href} passHref legacyBehavior>
              <MuiLink
                title={link.title}
                sx={{
                  position: "absolute",
                  left: link.position.left,
                  top: link.position.top,
                  width: link.position.width,
                  height: link.position.height,
                  "&:hover": {
                    outline: "2px solid white",
                    opacity: 0.2,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              />
            </NextLink>
          ))}
        </Box>
      </Stack>
    );
  };

export default Sc1ApplicationForRegistrationAsANewProviderOfRegulatedActivitiesPage;
