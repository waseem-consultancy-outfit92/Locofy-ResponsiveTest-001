"use client";
import { MultiPathPage } from "@/components";
import {
  img1SocialMediaAccountsImage,
  img2SocialMediaAccountsImage,
  img3SocialMediaAccountsImage,
  img4SocialMediaAccountsImage,
  img5SocialMediaAccountsImage,
  img6SocialMediaAccountsImage,
} from "@/assets";
import React from "react";

const SocialMediaAccountsPageData = [
  {
    key: "social-1",
    link: "https://twitter.com/Identitygram_",
    icon: img1SocialMediaAccountsImage,
    title: "Twitter",
  },
  {
    key: "social-2",
    link: "https://www.instagram.com/identitygram_/",
    icon: img2SocialMediaAccountsImage,
    title: "Instagram",
  },
  {
    key: "social-3",
    link: "https://www.facebook.com/Identitygram",
    icon: img3SocialMediaAccountsImage,
    title: "Facebook",
  },
  {
    key: "social-4",
    link: "https://www.tiktok.com/@identitygram_",
    icon: img4SocialMediaAccountsImage,
    title: "Tiktok",
  },
  {
    key: "social-5",
    link: "https://www.linkedin.com/company/identitygram/",
    icon: img5SocialMediaAccountsImage,
    title: "Linkedln",
  },
  {
    key: "social-6",
    link: "https://www.youtube.com/@Identitygram_",
    icon: img6SocialMediaAccountsImage,
    title: "Youtube",
  },
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
