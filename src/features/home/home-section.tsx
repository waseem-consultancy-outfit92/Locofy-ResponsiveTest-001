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

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
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
      <Stack direction="row" alignItems="center" mt={{ md: 2, xs: 1 }}>
        <img src={appLogo.src} alt="CQC Logo" width={98} height={31} />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
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
          </Box>
        </>
      )}
    </Box>
  );
};