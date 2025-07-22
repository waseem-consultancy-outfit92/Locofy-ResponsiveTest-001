"use client";
import React from "react";
import { MultiPathPage } from "@/components";
import {
  img1AccessRulebookImage,
  img2AccessRulebookImage,
  img3AccessRulebookImage,
  img4AccessRulebookImage,
  img5AccessRulebookImage,
  img6AccessRulebookImage,
  img7AccessRulebookImage,
  img8AccessRulebookImage,
  img9AccessRulebookImage,
  img10AccessRulebookImage,
} from "@/assets";

const AccessRulebookPageData = [
  {
    key: "access-1",
    link: "/introduction",
    icon: img1AccessRulebookImage,
    title: "Introduction",
  },
  {
    key: "access-2",
    link: "/definition",
    icon: img2AccessRulebookImage,
    title: "Definition",
  },
  {
    key: "access-3",
    link: "/application-process",
    icon: img3AccessRulebookImage,
    title: "Application Process",
  },
  {
    key: "access-4",
    link: "/eligibility-for-admission",
    icon: img4AccessRulebookImage,
    title: "Eligibility For Admission",
  },
  {
    key: "access-5",
    link: "/continuing-obligations",
    icon: img5AccessRulebookImage,
    title: "Continuing Obligations",
  },
  {
    key: "access-6",
    link: "/disclosure-and-transparency-obligations",
    icon: img6AccessRulebookImage,
    title: "Disclosure And Transparency Obligations",
  },
  {
    key: "access-7",
    link: "/suspending-cancelling-and-restoring-trading-and-admission",
    icon: img7AccessRulebookImage,
    title: "Suspending, Cancelling And Restoring Trading And Admission",
  },
  {
    key: "access-8",
    link: "/fast-track",
    icon: img8AccessRulebookImage,
    title: "Fast-Track",
  },
  {
    key: "access-9",
    link: "/investigations-sanctions-and-discipline",
    icon: img9AccessRulebookImage,
    title: "Investigations, Sanctions And Discipline",
  },
  {
    key: "access-10",
    link: "/admission-document-appendix-i",
    icon: img10AccessRulebookImage,
    title: "Admission Document (Appendix I)",
  },
];

const AccessRulebookPage = () => {
  return (
    <MultiPathPage
      arrayData={AccessRulebookPageData}
      pageTitle="Access Rulebook"
      backRoute="/rules-and-fees"
    />
  );
};

export default AccessRulebookPage;
