"use client";
import { MultiPathPage } from "@/components";
import {
  img1SectorSubjectArea2CodesImage,
  img12LarsCoursesClassificationImage,
  img3SectorSubjectArea2CodesImage,
  img4SectorSubjectArea2CodesImage,
  img5SectorSubjectArea2CodesImage,
} from "@/assets";
import React from "react";

const SectorSubjectArea2CodesPageData = [
  {
    key: "sector-1",
    link: "/",
    icon: img1SectorSubjectArea2CodesImage,
    title: "10-History, Philosophy and Theology",
  },
  {
    key: "sector-2",
    link: "/",
    icon: img12LarsCoursesClassificationImage,
    title: "10.1-History",
  },
  {
    key: "sector-3",
    link: "/",
    icon: img3SectorSubjectArea2CodesImage,
    title: "10.2-Archaeology and Archaeological Sciences",
  },
  {
    key: "sector-4",
    link: "/",
    icon: img4SectorSubjectArea2CodesImage,
    title: "10.3-Philosophy",
  },
  {
    key: "sector-5",
    link: "/",
    icon: img5SectorSubjectArea2CodesImage,
    title: "10.4-Theology and Religious Studies",
  },
];

const SectorSubjectArea2CodesPage = () => {
  return (
    <MultiPathPage
      arrayData={SectorSubjectArea2CodesPageData}
      pageTitle="10-History, Philosophy and Theology"
      backRoute="/lars-courses-classification"
    />
  );
};

export default SectorSubjectArea2CodesPage;
