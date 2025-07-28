"use client";
import { MultiPathPage } from "@/components";
import {
  img1LarsCoursesClassificationImage,
  img2LarsCoursesClassificationImage,
  img3LarsCoursesClassificationImage,
  img4LarsCoursesClassificationImage,
  img5LarsCoursesClassificationImage,
  img6LarsCoursesClassificationImage,
  img7LarsCoursesClassificationImage,
  img8LarsCoursesClassificationImage,
  img9LarsCoursesClassificationImage,
  img10LarsCoursesClassificationImage,
  img11LarsCoursesClassificationImage,
  img12LarsCoursesClassificationImage,
  img13LarsCoursesClassificationImage,
  img14LarsCoursesClassificationImage,
  img15LarsCoursesClassificationImage,
  img16LarsCoursesClassificationImage,
  img17LarsCoursesClassificationImage,
} from "@/assets";
import React from "react";

const LarsCoursesClassificationPageData = [
  {
    key: "lars-1",
    link: "/",
    icon: img1LarsCoursesClassificationImage,
    title: "4-Engineering and Manufacturing Technologies",
  },
  {
    key: "lars-2",
    link: "/",
    icon: img2LarsCoursesClassificationImage,
    title: "-2-Not Applicable",
  },
  {
    key: "lars-3",
    link: "/",
    icon: img3LarsCoursesClassificationImage,
    title: "-1-Unknown",
  },
  {
    key: "lars-4",
    link: "/",
    icon: img4LarsCoursesClassificationImage,
    title: "1-Health, Public Services and Care",
  },
  {
    key: "lars-5",
    link: "/",
    icon: img5LarsCoursesClassificationImage,
    title: "2-Science & Mathematics",
  },
  {
    key: "lars-6",
    link: "/",
    icon: img6LarsCoursesClassificationImage,
    title: "3-Agriculture, Horticulture and Animal Care",
  },
  {
    key: "lars-7",
    link: "/",
    icon: img7LarsCoursesClassificationImage,
    title: "5-Construction, Planning and the Built Environment",
  },
  {
    key: "lars-8",
    link: "/",
    icon: img8LarsCoursesClassificationImage,
    title: "6-Digital Technology",
  },
  {
    key: "lars-9",
    link: "/",
    icon: img9LarsCoursesClassificationImage,
    title: "7-Retail and Commercial Enterprise",
  },
  {
    key: "lars-10",
    link: "/",
    icon: img10LarsCoursesClassificationImage,
    title: "8-Leisure, Travel and Tourism",
  },
  {
    key: "lars-11",
    link: "/",
    icon: img11LarsCoursesClassificationImage,
    title: "9-Arts, Media and Publishing",
  },
  {
    key: "lars-12",
    link: "/sector-subject-area-2-codes",
    icon: img12LarsCoursesClassificationImage,
    title: "10-History, Philosophy and Theology",
  },
  {
    key: "lars-13",
    link: "/",
    icon: img13LarsCoursesClassificationImage,
    title: "11-Social Sciences",
  },
  {
    key: "lars-14",
    link: "/",
    icon: img14LarsCoursesClassificationImage,
    title: "12-Languages, Literature and Culture",
  },
  {
    key: "lars-15",
    link: "/",
    icon: img15LarsCoursesClassificationImage,
    title: "13-Education and Training",
  },
  {
    key: "lars-16",
    link: "/",
    icon: img16LarsCoursesClassificationImage,
    title: "14-Preparation for Life and Work",
  },
  {
    key: "lars-17",
    link: "/",
    icon: img17LarsCoursesClassificationImage,
    title: "15-Business, Administration and Law",
  },
];

const LarsCoursesClassificationPage = () => {
  return (
    <MultiPathPage
      arrayData={LarsCoursesClassificationPageData}
      pageTitle="Sector Subject Area Tier 1 Codes"
      backRoute="/"
    />
  );
};

export default LarsCoursesClassificationPage;
