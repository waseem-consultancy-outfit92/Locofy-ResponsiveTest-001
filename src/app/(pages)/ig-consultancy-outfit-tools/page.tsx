"use client";
import { MultiPathPage } from "@/components";
import {
  img1ConsultancyOutfitToolsImage,
  img2ConsultancyOutfitToolsImage,
  img3ConsultancyOutfitToolsImage,
  img4ConsultancyOutfitToolsImage,
  img5ConsultancyOutfitToolsImage,
  img6ConsultancyOutfitToolsImage,
  img7ConsultancyOutfitToolsImage,
  img8ConsultancyOutfitToolsImage,
  img9ConsultancyOutfitToolsImage,
  img10ConsultancyOutfitToolsImage
} from "@/assets";
import React from "react";

const ConsultancyOutfitToolsPageData = [
  {
    key: "consultancy-1",
    link: "/",
    icon: img1ConsultancyOutfitToolsImage,
    title: "Figma",
  },
  {
    key: "consultancy-2",
    link: "/",
    icon: img2ConsultancyOutfitToolsImage,
    title: "Confluence",
  },
  {
    key: "consultancy-3",
    link: "/",
    icon: img3ConsultancyOutfitToolsImage,
    title: "Jira",
  },
  {
    key: "consultancy-4",
    link: "/",
    icon: img4ConsultancyOutfitToolsImage,
    title: "Jira Product Discovery",
  },
  {
    key: "consultancy-5",
    link: "/",
    icon: img5ConsultancyOutfitToolsImage,
    title: "Airtable",
  },
  {
    key: "consultancy-6",
    link: "/",
    icon: img6ConsultancyOutfitToolsImage,
    title: "Miro",
  },
  {
    key: "consultancy-7",
    link: "/",
    icon: img7ConsultancyOutfitToolsImage,
    title: "Lucid Chart",
  },
  {
    key: "consultancy-8",
    link: "/",
    icon: img8ConsultancyOutfitToolsImage,
    title: "MS Teams",
  },
  {
    key: "consultancy-9",
    link: "/",
    icon: img9ConsultancyOutfitToolsImage,
    title: "MS Office",
  },
  {
    key: "consultancy-10",
    link: "/",
    icon: img10ConsultancyOutfitToolsImage,
    title: "Time Doctor",
  }
];

const ConsultancyOutfitToolsPage = () => {
  return (
    <MultiPathPage
      arrayData={ConsultancyOutfitToolsPageData}
      pageTitle="Consultancy Outfit Tools"
      backRoute="/FCA Sequence Diagram"
    />
  );
};

export default ConsultancyOutfitToolsPage;
