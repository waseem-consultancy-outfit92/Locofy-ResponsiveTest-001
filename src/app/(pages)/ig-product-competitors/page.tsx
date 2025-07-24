"use client";
import { MultiPathPage } from "@/components";
import {
  img1ProductCompetitorsImage,
  img2ProductCompetitorsImage,
  img3ProductCompetitorsImage,
  img4ProductCompetitorsImage,
  img5ProductCompetitorsImage,
  img6ProductCompetitorsImage
} from "@/assets";
import React from "react";

const ProductCompetitorsPageData = [
  {
    key: "product-1",
    link: "/",
    icon: img1ProductCompetitorsImage,
    title: "Veriff",
  },
  {
    key: "product-2",
    link: "/",
    icon: img2ProductCompetitorsImage,
    title: "North Row",
  },
  {
    key: "product-3",
    link: "/",
    icon: img3ProductCompetitorsImage,
    title: "zinc Work",
  },
  {
    key: "product-4",
    link: "/",
    icon: img4ProductCompetitorsImage,
    title: "Sum Sub",
  },
  {
    key: "product-5",
    link: "/",
    icon: img5ProductCompetitorsImage,
    title: "Shufti Pro",
  },
  {
    key: "product-6",
    link: "/",
    icon: img6ProductCompetitorsImage,
    title: "YouVerify",
  }
];

const ProductCompetitorsPage = () => {
  return (
    <MultiPathPage
      arrayData={ProductCompetitorsPageData}
      pageTitle="Product Competitors"
      backRoute="/FCA Sequence Diagram"
    />
  );
};

export default ProductCompetitorsPage;
