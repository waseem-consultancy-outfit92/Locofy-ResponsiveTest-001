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
  img12ThirdPartyApisImage,
} from "@/assets";
import React from "react";

const ThirdPartyApisPageData = [
  {
    key: "third-1",
    link: "https://developer.company-information.service.gov.uk/overview/",
    icon: img1ThirdPartyApisImage,
    title: "Companies House API",
  },
  {
    key: "third-2",
    link: "https://aws.amazon.com/rekognition/",
    icon: img2ThirdPartyApisImage,
    title: "AWS Rekognition",
  },
  {
    key: "third-3",
    link: "https://complyadvantage.com/",
    icon: img3ThirdPartyApisImage,
    title: "Comply Advantage",
  },
  {
    key: "third-4",
    link: "https://www.verifile.co.uk/background-check-api",
    icon: img4ThirdPartyApisImage,
    title: "Verifile API",
  },
  {
    key: "third-5",
    link: "https://developer.trulioo.com/",
    icon: img5ThirdPartyApisImage,
    title: "Trulioo API",
  },
  {
    key: "third-6",
    link: "https://aws.amazon.com/fraud-detector/",
    icon: img6ThirdPartyApisImage,
    title: "AWS Fraud Detector",
  },
  {
    key: "third-7",
    link: "https://aws.amazon.com/lambda/",
    icon: img7ThirdPartyApisImage,
    title: "AWS Lambda",
  },
  {
    key: "third-8",
    link: "https://www.sterlingcheck.com/services/api/",
    icon: img8ThirdPartyApisImage,
    title: "Sterling API",
  },
  {
    key: "third-9",
    link: "https://www.truework.com/products/api",
    icon: img9ThirdPartyApisImage,
    title: "Truework API",
  },
  {
    key: "third-10",
    link: "https://www.experian.com/connect/api/?msockid=2573581bb2e0693c0e464bfeb3b268d2",
    icon: img10ThirdPartyApisImage,
    title: "Experian API",
  },
  {
    key: "third-11",
    link: "https://aws.amazon.com/textract/",
    icon: img11ThirdPartyApisImage,
    title: "Amazon Textract",
  },
  {
    key: "third-12",
    link: "https://ipinfo.io/developers",
    icon: img12ThirdPartyApisImage,
    title: "IP Info API",
  },
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
