"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colorLegends, appLogo } from "@/assets/common-assets";
import Image from "next/image";

// Define SVG icon paths (replace with your actual SVGs if needed)
const PlayCircleRoundedSVG = `<circle cx="12" cy="12" r="10" fill="#fff"/><polygon points="10,8 16,12 10,16" fill="#000"/>`;
const StopCircleRoundedSVG = `<circle cx="12" cy="12" r="10" fill="#fff"/><rect x="9" y="9" width="6" height="6" fill="#FF0000"/>`;
const NotesRoundedSVG = `<circle cx="12" cy="12" r="10" fill="#fff"/><rect x="10" y="10" width="4" height="4" fill="#808080"/>`;

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

const audioHotspots: any = [
  // ...existing audioHotspots array...
  // (keep your array as is)
];

const internalLinks: any = [
  // ...existing internalLinks array...
  // (keep your array as is)
];

// Set original image dimensions for scaling
const originalImageWidth = 7440;
const originalImageHeight = 6020;

const renderSvgIcon = (path: string, color: string) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill={color} dangerouslySetInnerHTML={{ __html: path }} />
);

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const preloadedAudiosRef = useRef<{ [id: string]: HTMLAudioElement }>({});

  useEffect(() => {
    const placeholderAudio = preloadedAudiosRef.current;
    audioHotspots.forEach((hotspot: any) => {
      const audio = new Audio(hotspot.audioSrc);
      audio.preload = "auto";
      preloadedAudiosRef.current[hotspot.id] = audio;
    });

    return () => {
      Object.values(placeholderAudio).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

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
    [playingAudioId]
  );

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [playingAudioId]);

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
    []
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
    []
  );

  return (
    <Box sx={{ p: 3, position: "relative" }}>
      <Stack flexDirection="row" alignItems="center" mt={{ md: 2, xs: 1 }}>
        <Image src={appLogo} alt="FCA Logo" width={98} height={31} />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
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
        {internalLinks.map((link: any, idx: any) => (
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

        {audioHotspots.map((hotspot: any) => {
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
            <Image
              src={colorLegends}
              alt="Color Legend"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};