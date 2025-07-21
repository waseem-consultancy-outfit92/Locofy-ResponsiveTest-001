"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colorLegends, appLogo } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

// Define the Area interface with all its properties, including `target`
interface Area {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: "rect";
  type: "link" | "audio";
  audioSrc?: string;
  target?: string; 
}

<<<<<<< HEAD
const interactiveAreas: Area[] = [
    {
      alt: "End-to-End CQC Listing Process",
      title: "End-to-End CQC Listing Process",
      href: "#",
      coords: "385.07,26.50,415.10,60.06",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/1.%20Applicant%20Logs%20In%20and%20Initiates%20Application.mp4",
    },
    {
      alt: "SC2: Submit Application to Register as a Manager",
      title: "SC2: Submit Application to Register as a Manager",
      href: "https://www.cqc.org.uk/",
      coords: "1107.52,90.09,1349.52,128.95",
      shape: "rect",
      type: "link",
      target: "_blank", 
    },
    {
      alt: "Log in to Portal",
      title: "Log in to Portal",
      href: "/care-quality-commission-cqc-overview",
      coords: "1356.58,91.85,1591.51,130.71",
      shape: "rect",
      type: "link",
    },
    {
      alt: "CQC Breakdown Diagram",
      title: "CQC Breakdown Diagram",
      href: "/care-quality-commission",
      coords: "1598.58,91.85,1830.97,128.95",
      shape: "rect",
      type: "link",
    },
    {
      alt: "SC1: Submit Application to Register as a Provider",
      title: "🔗 SC1: Submit Application to Register as a Provider",
      href: "/sc1-application-for-registration-as-a-new-provider-of-regulated-activities",
      coords: "95.38,521.08,355.04,561.71",
      shape: "rect",
      type: "link",
    },
    {
      alt: "Application Options Displayed",
      title: "Application Options Displayed",
      href: "/application-for-registration-as-a-manager-of-regulated-activityactivities",
      coords: "409.80,589.97,683.59,637.66",
      shape: "rect",
      type: "link",
    },
    {
      alt: "Choose or Modify Regulated Activities",
      title: "Choose or Modify Regulated Activities",
      href: "/care-quality-commission-regulated-services-14",
      coords: "104.22,773.68,284.39,798.40",
      shape: "rect",
      type: "link",
    },
    {
      alt: "Verify Supporting Documents (Near Upload Docs)",
      title: "Verify Supporting Documents (Near Upload Docs)",
      href: "/manage-location",
      coords: "120.11,966.21,272.02,987.41",
      shape: "rect",
      type: "link",
    },
    {
      alt: "Select Regulated Activities",
      title: "Select Regulated Activities",
      href: "/specific-type-of-services",
      coords: "111.28,1208.21,289.69,1234.70",
      shape: "rect",
      type: "link",
    },
    {
      alt: "Activities Confirmed",
      title: "Activities Confirmed",
      href: "/documents",
      coords: "293.22,1598.58,510.49,1630.37",
      shape: "rect",
      type: "link",
    },
    {
      alt: "Applicant Logs In and Initiates Application",
      title: "Applicant Logs In and Initiates Application",
      href: "#",
      coords: "552.88,372.71,577.61,397.44",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/1.%20Applicant%20Logs%20In%20and%20Initiates%20Application.mp4",
    },
    {
      alt: "Login in to portal",
      title: "Login in to portal",
      href: "#",
      coords: "197.83,416.87,222.56,439.83",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/2.%20Log%20in%20to%20Portal.mp4",
    },
    {
      alt: "Location Updated",
      title: "Location Updated",
      href: "#location-updated",
      coords: "701.25,473.39,729.52,499.89",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/3.%20Application%20Options%20Displayed.mp4",
    },
    {
      alt: "Location Details Received",
      title: "Location Details Received",
      href: "#location-details-received",
      coords: "371.69,523.94,396.32,550.81",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/4.%20SC1%20Submit%20Application%20to%20Register%20as%20a%20Provider.mp4",
    },
    {
      alt: "SC2:Submit Application to Register as a Manager",
      title: "SC2:Submit Application to Register as a Manager",
      href: "#attach-service-specific-information",
      coords: "691.87,593.35,720.98,622.46",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/5.%20SC2%20Submit%20Application%20to%20Register%20as%20a%20Manager.mp4",
    },
    {
      alt: "Choose or Modify Regulated Activities",
      title: "Choose or Modify Regulated Activities",
      href: "#",
      coords: "539.62,729.94,564.25,752.33",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/6.%20Choose%20or%20Modify%20Regulated%20Activities.mp4",
    },
    {
      alt: "Select regulated activities",
      title: "Select regulated activities",
      href: "#",
      coords: "300.04,774.72,324.67,803.83",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/7.%20Select%20Regulated%20Activities.mp4",
    },
    {
      alt: "Activities confirmed",
      title: "Activities confirmed",
      href: "#add-conditions-or-notices",
      coords: "698.59,830.70,725.46,859.81",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/8.%20Activities%20Confirmed.mp4",
    },
    {
      alt: "Add/remove locations",
      title: " Add/remove locations",
      href: "#",
      coords: "277.65,967.28,308.99,991.91",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/10.%20AddRemove%20Locations.mp4",
    },
    {
      alt: "Location updated",
      title: "Location updated",
      href: "#",
      coords: "212.71,1065.80,241.82,1094.91",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/13.%20Location%20Updated.mp4",
    },
    {
      alt: "Attach Service-Specific Information",
      title: "Attach Service-Specific Information",
      href: "#",
      coords: "535.14,1164.32,562.01,1191.19",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/15.%20Attach%20Service-Specific%20Information.mp4",
    },
    {
      alt: "🔗 Complete additional forms",
      title: "🔗 Complete additional forms",
      href: "#",
      coords: "297.80,1209.10,329.14,1242.69",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/16.%20Complete%20Additional%20Forms.mp4",
    },
    {
      alt: "Forms submitted",
      title: "Forms submitted",
      href: "#Forms submitted",
      coords: "217.19,1267.32,239.58,1294.19",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/17.%20Forms%20Submitted.mp4",
    },
    {
      alt: " Add Conditions or Notices",
      title: " Add Conditions or Notices",
      href: "#",
      coords: "499.31,1381.51,530.66,1410.62",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/18.%20Add%20Conditions%20or%20Notices.mp4",
    },
    {
      alt: "Upload Supporting Documents",
      title: "Upload Supporting Documents",
      href: "#",
      coords: "519.47,1600.94,541.86,1621.09",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/28.%20Upload%20Supporting%20Documents.mp4",
    },
    {
      alt: "Upload documents",
      title: "Upload documents",
      href: "#",
      coords: "282.12,1645.72,306.75,1672.59",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/29.%20Upload%20Documents.mp4",
    },
    {
      alt: "Approved documents",
      title: "Approved documents",
      href: "#",
      coords: "241.82,1703.94,270.93,1730.81",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/32.%20Approved%20Documents.mp4",
    },
    {
      alt: "Decision Issued",
      title: "Decision Issued",
      href: "#",
      coords: "467.97,1963.67,492.60,1992.78",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/36.%20Decision%20Issued.mp4",
    },
    {
      alt: "Notification of Approval/Rejection",
      title: "Notification of Approval/Rejection",
      href: "#",
      coords: "335.86,2046.51,362.73,2073.38",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/38.%20Notification%20of%20ApprovalRejection.mp4",
    },
    {
      alt: "End of monitoring process.",
      title: "End of monitoring process.",
      href: "#",
      coords: "326.91,2189.82,356.01,2214.45",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/39.%20End%20of%20Monitoring%20Process.mp4",
    },
    {
      alt: "Request clarification",
      title: "Request clarification",
      href: "#",
      coords: "884.43,1988.30,913.54,2017.41",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/37.%20Request%20Clarification.mp4",
    },
    {
      alt: "Location Configuration",
      title: "Location Configuration",
      href: "#",
      coords: "1005.34,951.61,1030.97,971.76",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/9.%20Location%20Configuration.mp4",
    },
    {
      alt: "Assign application",
      title: "Assign application",
      href: "#",
      coords: "927.98,1932.32,956.09,1961.43",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/35.%20Assign%20Application.mp4",
    },
    {
      alt: "Application Routed to CQC Assessor",
      title: "Application Routed to CQC Assessor",
      href: "#",
      coords: "1027.74,1892.02,1059.08,1921.13",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/34.%20Application%20Routed%20to%20CQC%20Assessor.mp4",
    },
    {
      alt: "Verification complete",
      title: "Verification complete",
      href: "#",
      coords: "888.91,1739.76,915.78,1768.87",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/33.%20Verification%20Complete.mp4",
    },
    {
      alt: "Verify Supporting Documents",
      title: "Verify Supporting Documents",
      href: "#",
      coords: "958.32,1679.31,985.19,1708.42",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/31.%20Verify%20Supporting%20Documents.mp4",
    },
    {
      alt: "System Validation & Pre-Screening",
      title: "System Validation & Pre-Screening",
      href: "#finalize-assessment",
      coords: "1204.62,1636.76,1231.49,1663.63",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/30.%20System%20Validation%20&%20Pre-Screening.mp4",
    },
    {
      alt: "Location details received",
      title: "Location details received",
      href: "#",
      coords: "913.54,1063.56,938.17,1090.43",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/14.%20Location%20Details%20Received.mp4",
    },
    {
      alt: "Submit Location Details",
      title: "Submit Location Details",
      href: "#submit-application-summary",
      coords: "922.50,1007.58,949.37,1034.45",
      shape: "rect",
      type: "audio",
      audioSrc: "https://orcalo.blob.core.windows.net/locofy/CQC/12.%20Submit%20Location%20Details.mp4",
    },
  ];
=======
const audioHotspots = [
  {
    id: "applicantAccessPortal",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Applicant-Accesses-FCA-Connect-Portal.mp4",
    x: 1288.0,
    y: 936.73,
    width: 179.54,
    height: 163.92,
    title: "Applicant Access FCA Connect Portal Audio",
  },
  {
    id: "startApplication",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Start-an-Application.mp4",
    x: 1194.33,
    y: 1202.14,
    width: 163.92,
    height: 132.7,
    title: "Start an application Audio",
  },
  {
    id: "completeApplication",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Complete-the-application-with-contact-details-fee-payment-declaration-and-upload-required-documents.mp4",
    x: 1218.05,
    y: 1952.47,
    width: 125.38,
    height: 134.34,
    title: "Complete the Application Audio",
  },
  {
    id: "checkCompleteness",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Check-for-completeness.mp4",
    x: 2435.5,
    y: 2443.31,
    width: 140.5,
    height: 124.89,
    title: "Check the completeness",
  },
  {
    id: "completenessCheckResult",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Completeness-Check-Result.mp4",
    x: 3583.0,
    y: 2724.33,
    width: 140.5,
    height: 124.89,
    title: "Completeness Check Result",
  },
  {
    id: "requestFurtherInformation",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Request-further-information.mp4",
    x: 1288.0,
    y: 3122.44,
    width: 132.7,
    height: 117.09,
    title: "Request Further Information",
  },
  {
    id: "provideAdditionalData",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Provide-additional-data.mp4",
    x: 1225.55,
    y: 3348.81,
    width: 140.5,
    height: 117.09,
    title: "Provide Additional Data",
  },
  {
    id: "revalidateProvidedData",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Revalidate-provided-data.mp4",
    x: 2443.31,
    y: 3450.29,
    width: 101.47,
    height: 132.7,
    title: "Revalidate Provided Data",
  },
  {
    id: "fitnessAndProprietyAssessment",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Fitness-and-Propriety-Assessment.mp4",
    x: 3684.48,
    y: 4066.98,
    width: 140.5,
    height: 140.5,
    title: "Fitness & Properiert Assessment",
  },
  {
    id: "assessmentResult",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Assessment-Result.mp4",
    x: 3504.94,
    y: 4379.22,
    width: 148.31,
    height: 124.89,
    title: "Assessment Results",
  },
  {
    id: "decisionApproveReject",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Decision-Approve-Reject.mp4",
    x: 1241.17,
    y: 4566.57,
    width: 179.54,
    height: 124.89,
    title: "Decision Approve & Reject",
  },
  {
    id: "ifApprovedRegisterFirmAndPublish",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/If-Approved-Register-firm-&-publish.mp4",
    x: 2458.92,
    y: 4871.01,
    width: 124.89,
    height: 148.31,
    title: "If Approved Register firm & publish",
  },
];

const internalLinks = [
  {
    href: "/pisp-api",
    x: 366.88,
    y: 1592.44,
    width: 1085.04,
    height: 288.82,
    title: "Complete the Application",
  },
  {
    href: "/pisp_spi",
    x: 850.86,
    y: 1896.88,
    width: 187.34,
    height: 70.25,
    title: "SPI",
  },
  {
    href: "/raisp",
    x: 819.64,
    y: 1998.36,
    width: 234.18,
    height: 54.64,
    title: "RAISP",
  },
  {
    href: "/fca-application-e-money-new-authorisation-registration-aemi",
    x: 835.25,
    y: 2084.23,
    width: 195.15,
    height: 70.25,
    title: "AEMI",
  },
  {
    href: "/semi",
    x: 850.86,
    y: 2193.51,
    width: 171.73,
    height: 78.06,
    title: "SEMI",
  },
  {
    href: "/fca-application",
    x: 6401.0,
    y: 335.66,
    width: 960.15,
    height: 171.73,
    title: "FCA Application Process",
  },
  {
    href: "/payment-services-and-electronic-money-our-approach",
    x: 6393.2,
    y: 530.81,
    width: 944.53,
    height: 132.7,
    title: "Payment Services & E-Money",
  },
  {
    href: "https://connect.fca.org.uk/portal/s/",
    x: 538.62,
    y: 944.53,
    width: 686.93,
    height: 179.54,
    title: "Applicant Access FCA Connect Portal",
    target: "_blank",
  },
  {
    href: "https://connect.fca.org.uk/firms/aupo_applicationselection",
    x: 468.36,
    y: 1225.55,
    width: 569.84,
    height: 101.47,
    title: "Start an application",
    target: "_blank",
  },
];

const renderSvgIcon = (path: string, color: string) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill={color}>
    <g dangerouslySetInnerHTML={{ __html: path }} />
  </svg>
);
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  const [playingAudioIds, setPlayingAudioIds] = useState<Set<string>>(new Set());
  const audioRefs = useRef<{ [id: string]: HTMLAudioElement }>({});
  const router = useRouter();

  const originalImageWidth = 1860;
  const originalImageHeight = 2427;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    interactiveAreas.forEach((area) => {
      if (area.type === "audio" && area.audioSrc && !audioRefs.current[area.href]) {
        const audio = new Audio(area.audioSrc);
        audio.load();
        audioRefs.current[area.href] = audio;
      }
    });

    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
      audioRefs.current = {};
      setPlayingAudioIds(new Set());
    };
  }, [isClient]);
=======
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const preloadedAudiosRef = useRef<{ [id: string]: HTMLAudioElement }>({});
  useEffect(() => {
    audioHotspots.forEach((hotspot) => {
      const audio = new Audio(hotspot.audioSrc);
      audio.preload = "auto";
      preloadedAudiosRef.current[hotspot.id] = audio;
    });

    return () => {
      // Cleanup
      Object.values(preloadedAudiosRef.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        legendRef.current &&
        !legendRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

<<<<<<< HEAD
  const handleAreaClick = useCallback(
    (area: Area) => {
      if (area.type === "link") {
        area.target === "_blank" ? window.open(area.href, "_blank") : router.push(area.href);
      } else if (area.type === "audio" && area.audioSrc) {
        const id = area.href;
        const audio = audioRefs.current[id];
        if (!audio) return;

        if (playingAudioIds.has(id)) {
          audio.pause();
          audio.currentTime = 0;
          setPlayingAudioIds((prev) => {
            const newSet = new Set(prev);
            newSet.delete(id);
            return newSet;
          });
        } else {
          Object.entries(audioRefs.current).forEach(([audioId, audioElement]) => {
            if (audioId !== id && !audioElement.paused) {
              audioElement.pause();
              audioElement.currentTime = 0;
              setPlayingAudioIds((prev) => {
                const newSet = new Set(prev);
                newSet.delete(audioId);
                return newSet;
              });
            }
          });

          audio.currentTime = 0;
          audio.play().catch(console.error);
          setPlayingAudioIds((prev) => new Set(prev).add(id));

          audio.onended = () => {
            setPlayingAudioIds((prev) => {
              const newSet = new Set(prev);
              newSet.delete(id);
              return newSet;
            });
          };
        }
=======
  const handlePlayAudio = useCallback(
    (src: string, id: string) => {
      const existingAudio = preloadedAudiosRef.current[id];

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      if (playingAudioId === id) {
        setPlayingAudioId(null);
        audioRef.current = null;
      } else if (existingAudio) {
        audioRef.current = existingAudio;
        existingAudio.currentTime = 0;
        existingAudio.play();
        setPlayingAudioId(id);
        existingAudio.onended = () => {
          setPlayingAudioId(null);
          audioRef.current = null;
        };
      } else {
        // fallback
        const fallback = new Audio(src);
        audioRef.current = fallback;
        fallback.play();
        setPlayingAudioId(id);
        fallback.onended = () => {
          setPlayingAudioId(null);
          audioRef.current = null;
        };
      }
    },
    [playingAudioId],
  );

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
      }
    },
    [playingAudioIds, router]
  );

  const getScaledCoords = useCallback(
    (coords: string) => {
      const [x1, y1, x2, y2] = coords.split(",").map(Number);
      const currentImage = document.querySelector('img[usemap="#image-map"]');
      if (!currentImage) return coords;

      const scaleX = currentImage.clientWidth / originalImageWidth;
      const scaleY = currentImage.clientHeight / originalImageHeight;

      return [
        (x1 * scaleX).toFixed(2),
        (y1 * scaleY).toFixed(2),
        (x2 * scaleX).toFixed(2),
        (y2 * scaleY).toFixed(2),
      ].join(",");
    },
    [originalImageWidth, originalImageHeight]
  );

  const getButtonPosition = useCallback(
    (coords: string) => {
      const [x1, y1] = coords.split(",").map(Number);
      const currentImage = document.querySelector('img[usemap="#image-map"]');
      if (!currentImage) return { left: "0px", top: "0px" };

      const scaleX = currentImage.clientWidth / originalImageWidth;
      const scaleY = currentImage.clientHeight / originalImageHeight;

      return {
        left: `${(x1 + 5) * scaleX}px`,
        top: `${(y1 - 5) * scaleY}px`,
      };
    },
    [originalImageWidth, originalImageHeight]
  );

  return (
    <Box sx={{ p: 3, position: "relative" }}>
<<<<<<< HEAD
      <Stack direction="row" alignItems="center" mt={{ md: 2, xs: 1 }}>
        <img src={appLogo.src} alt="CQC Logo" width={98} height={31} />
=======
      <Stack flexDirection="row" alignItems="center" mt={{ md: 2, xs: 1 }}>
        <img src={appLogo.src} alt="FCA Logo" width={98} height={31} />
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
<<<<<<< HEAD
          ml={{ md: -2, xs: 1 }}
        >
          CQC Listing Process
        </Typography>
      </Stack>

      {isClient && (
        <>
          <Stack direction="row" justifyContent="space-between" mt={2}>
            <Typography variant="h3" color="#5A5867" fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }} fontWeight={600} ml={2}>
              Sequence Diagram
            </Typography>
            <Typography variant="h3" fontWeight={600} ml={2} display="flex" alignItems="center">
              <Typography
                component="span"
                fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.8rem" }}
                fontWeight={600}
                color="#5A5867"
                sx={{ mr: 1 }}
              >
                Colour Legend
              </Typography>
              <span ref={iconRef}>
                <KeyboardArrowDownIcon
                  onClick={toggleDropdown}
                  sx={{
                    fontSize: { xs: 28, md: 30 },
                    color: "#5A5867",
                    border: "2px solid",
                    borderRadius: "40px",
                    cursor: "pointer",
                  }}
                />
              </span>
            </Typography>
          </Stack>

          <Box sx={{ width: "100%", overflow: "hidden", position: "relative" }}>
            <img
              src="/CQCListingProcess.svg"
              useMap="#image-map"
              alt="CQC Application Process Diagram"
              style={{ width: "100%", height: "auto" }}
            />
            <map name="image-map">
              {interactiveAreas.map((area, index) => (
                <area
                  key={index}
                  alt={area.alt}
                  title={area.title}
                  href={area.href}
                  coords={getScaledCoords(area.coords)}
                  shape={area.shape}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAreaClick(area);
                  }}
                  style={{ cursor: "pointer" }}
                  {...(area.type === "link" && area.target && { target: area.target })}
                />
              ))}
            </map>

            <svg
              style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox={`0 0 ${originalImageWidth} ${originalImageHeight}`}
            >
              <style>
                {`
                .image-mapper-shape {
                  fill: rgba(0, 0, 0, 0);
                  stroke: transparent;
                  stroke-width: 2px;
                  transition: stroke 0.2s ease-in-out, opacity 0.2s ease-in-out;
                  cursor: pointer;
                }
                .image-mapper-shape:hover {
                  stroke: white;
                  opacity: 0.2;
                }
              `}
              </style>
              {interactiveAreas.map((area, index) => {
                const [x1, y1, x2, y2] = area.coords.split(",").map(Number);
                const width = x2 - x1;
                const height = y2 - y1;
                return (
                  <rect
                    key={`svg-rect-${index}`}
                    x={x1}
                    y={y1}
                    width={width}
                    height={height}
                    className="image-mapper-shape"
                    onClick={() => handleAreaClick(area)}
                  />
                );
              })}
            </svg>
          </Box>
        </>
      )}

      {isOpen && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              zIndex: 1200,
            }}
            onClick={() => setIsOpen(false)}
          />
          <Box
            ref={legendRef}
            sx={{
              position: "absolute",
              top: "150px",
              right: "50px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: 3,
              p: 1,
              zIndex: 1300,
              width: 300, // ✅ Ensure width is set so image appears
              height: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={colorLegends.src}
              alt="Color Legend"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
=======
          ml={{ md: 2, xs: 1 }}
        >
          FCA Application Process
        </Typography>
      </Stack>

      <Stack flexDirection="row" justifyContent="space-between" mt={2}>
        <Typography
          variant="h3"
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
        >
          Sequence Diagram
        </Typography>

        <Typography
          variant="h3"
          fontWeight={600}
          ml={2}
          display="flex"
          alignItems="center"
        >
          <Typography
            component="span"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.8rem" }}
            fontWeight={600}
            color="#5A5867"
            sx={{ mr: 1 }}
          >
            Colour Legend
          </Typography>
          <span ref={iconRef}>
            <KeyboardArrowDownIcon
              onClick={toggleDropdown}
              sx={{
                fontSize: { xs: 28, md: 30 },
                color: "#5A5867",
                border: "2px solid",
                borderRadius: "40px",
                cursor: "pointer",
              }}
            />
          </span>
        </Typography>
      </Stack>

      <svg
        viewBox="0 0 7440 6020"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ width: "100%" }}
      >
        <style>{`
          .image-mapper-shape { fill: rgba(0, 0, 0, 0); }
          g:hover .image-mapper-shape { stroke: white; stroke-width: 2px; opacity: 20%; }
        `}</style>
        <image xlinkHref="/Request Section hdn (2).png" width="7440" />
        {internalLinks.map((link, idx) => (
          <g
            key={`link-${idx}`}
            onClick={(e) => {
              e.stopPropagation();
              if (link.href.startsWith("http")) {
                window.open(link.href, link.target || "_blank");
              } else {
                window.location.href = link.href;
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <rect
              x={link.x}
              y={link.y}
              width={link.width}
              height={link.height}
              fill="rgba(0,0,0,0)"
            />
            <title>{link.title}</title>
          </g>
        ))}

        {audioHotspots.map((hotspot) => {
          const iconSize = 24;
          const x = hotspot.x + hotspot.width / 2 - iconSize / 2;
          const y = hotspot.y + hotspot.height / 2 - iconSize / 2;

          let icon = PlayCircleRoundedSVG;
          let color = "#000";

          if (playingAudioId === hotspot.id) {
            icon = StopCircleRoundedSVG;
            color = "#FF0000";
          } else if (playingAudioId !== null) {
            icon = NotesRoundedSVG;
            color = "#808080";
          }

          return (
            <g
              key={hotspot.id}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayAudio(hotspot.audioSrc, hotspot.id);
              }}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={hotspot.x}
                y={hotspot.y}
                width={hotspot.width}
                height={hotspot.height}
                className="image-mapper-shape audio-hotspot"
              />
              <foreignObject x={x} y={y} width={iconSize} height={iconSize}>
                {renderSvgIcon(icon, color)}
              </foreignObject>
            </g>
          );
        })}
      </svg>

      {isOpen && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              zIndex: 1200,
            }}
            onClick={() => setIsOpen(false)}
          />
          <Box
            ref={legendRef}
            sx={{
              position: "absolute",
              top: "150px",
              right: "50px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: 3,
              p: 1,
              zIndex: 1300,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={colorLegends.src}
              alt="Color Legend"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
          </Box>
        </>
      )}
    </Box>
  );
};