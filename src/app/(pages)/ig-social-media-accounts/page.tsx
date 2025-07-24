"use client";
import { MultiPathPage } from "@/components";
import {
  img1SocialMediaAccountsImage,
  img2SocialMediaAccountsImage,
  img3SocialMediaAccountsImage,
  img4SocialMediaAccountsImage,
  img5SocialMediaAccountsImage,
  img6SocialMediaAccountsImage
} from "@/assets";
import React from "react";

const SocialMediaAccountsPageData = [
  {
    key: "social-1",
    link: "/",
    icon: img1SocialMediaAccountsImage,
    title: "Twitter",
  },
  {
    key: "social-2",
    link: "/",
    icon: img2SocialMediaAccountsImage,
    title: "Instagram",
  },
  {
    key: "social-3",
    link: "/",
    icon: img3SocialMediaAccountsImage,
    title: "Facebook",
  },
  {
    key: "social-4",
    link: "/",
    icon: img4SocialMediaAccountsImage,
    title: "Tiktok",
  },
  {
    key: "social-5",
    link: "/",
    icon: img5SocialMediaAccountsImage,
    title: "Linkedln",
  },
  {
    key: "social-6",
    link: "/",
    icon: img6SocialMediaAccountsImage,
    title: "Youtube",
  }
];

const SocialMediaAccountsPage = () => {
  return (
    <MultiPathPage
      arrayData={SocialMediaAccountsPageData}
      pageTitle="Social Media Accounts"
      backRoute="/FCA Sequence Diagram"
    />
  );
};

export default SocialMediaAccountsPage;
