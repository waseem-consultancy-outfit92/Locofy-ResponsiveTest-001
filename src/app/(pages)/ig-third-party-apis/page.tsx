"use client";
import { MultiPathPage } from "@/components";
import {
  img1ThirdPartyApisImage,
  img2ThirdPartyApisImage,
  img3ThirdPartyApisImage,
  img4ThirdPartyApisImage,
  img5ThirdPartyApisImage,
  img6ThirdPartyApisImage,
  img7ThirdPartyApisImage,
  img8ThirdPartyApisImage,
  img9ThirdPartyApisImage,
  img10ThirdPartyApisImage,
  img11ThirdPartyApisImage,
  img12ThirdPartyApisImage
} from "@/assets";
import React from "react";

const ThirdPartyApisPageData = [
  {
    key: "third-1",
    link: "/",
    icon: img1ThirdPartyApisImage,
    title: "Companies House API",
  },
  {
    key: "third-2",
    link: "/",
    icon: img2ThirdPartyApisImage,
    title: "AWS Rekognition",
  },
  {
    key: "third-3",
    link: "/",
    icon: img3ThirdPartyApisImage,
    title: "Comply Advantage",
  },
  {
    key: "third-4",
    link: "/",
    icon: img4ThirdPartyApisImage,
    title: "Verifile API",
  },
  {
    key: "third-5",
    link: "/",
    icon: img5ThirdPartyApisImage,
    title: "Trulioo API",
  },
  {
    key: "third-6",
    link: "/",
    icon: img6ThirdPartyApisImage,
    title: "AWS Fraud Detector",
  },
  {
    key: "third-7",
    link: "/",
    icon: img7ThirdPartyApisImage,
    title: "AWS Lambda",
  },
  {
    key: "third-8",
    link: "/",
    icon: img8ThirdPartyApisImage,
    title: "Sterling API",
  },
  {
    key: "third-9",
    link: "/",
    icon: img9ThirdPartyApisImage,
    title: "Truework API",
  },
  {
    key: "third-10",
    link: "/",
    icon: img10ThirdPartyApisImage,
    title: "Experian API",
  },
  {
    key: "third-11",
    link: "/",
    icon: img11ThirdPartyApisImage,
    title: "Amazon Textract",
  },
  {
    key: "third-12",
    link: "/",
    icon: img12ThirdPartyApisImage,
    title: "IP Info API",
  }
];

const ThirdPartyApisPage = () => {
  return (
    <MultiPathPage
      arrayData={ThirdPartyApisPageData}
      pageTitle="Third party APIs"
      backRoute="/FCA Sequence Diagram"
    />
  );
};

export default ThirdPartyApisPage;
