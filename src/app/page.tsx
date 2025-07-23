'use client'
import { ColorLegendsImage, LogoImage, SequenceDiagramAqseImage } from "@/assets";
import { Box, Typography, Container, Link, Stack, Button } from "@mui/material";
import Image from "next/image";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import { useRef, useState } from "react";

interface ImageMapArea {
  x: number;
  y: number;
  width: number;
  height: number;
  href: string;
  title: string;
  target?: '_blank' | '_parent';
  type?: string
  audioSrc?: string
}

export default function Home() {
  const [open,setOpen]=useState(false)
 const imageWidth = 1860;
  const imageHeight = 1417;

  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<Record<number, HTMLAudioElement>>({});

  // const handleAreaClick = (area: ImageMapArea, index: number) => {
  //   if (area.type === "audio" && area.audioSrc) {
  //     const existingAudio = audioRefs.current[index];

  //     // If audio ref doesn't exist, create it
  //     if (!existingAudio) {
  //       const newAudio = new Audio(area.audioSrc);
  //       newAudio.addEventListener("ended", () => {
  //         setPlayingIndex(null);
  //       });
  //       audioRefs.current[index] = newAudio;
  //       newAudio.play();
  //       setPlayingIndex(index);
  //     } else {
  //       // Toggle play/pause
  //       if (playingIndex === index) {
  //         existingAudio.pause();
  //         setPlayingIndex(null);
  //       } else {
  //         // Pause any other playing audio
  //         if (playingIndex !== null && audioRefs.current[playingIndex]) {
  //           audioRefs.current[playingIndex].pause();
  //         }
  //         existingAudio.play();
  //         setPlayingIndex(index);
  //       }
  //     }
  //   } else if (area.type === "link") {
  //     if (area.target === "_blank") {
  //       window.open(area.href, "_blank");
  //     } else {
  //       window.location.href = area.href;
  //     }
  //   }
  // };

  // Define all clickable areas
  
  const handleAreaClick = (area: ImageMapArea, index: number) => {
    if (area.type === "audio" && area.audioSrc) {
      // If the same audio is clicked again, toggle play/pause
      if (playingIndex === index) {
        audioRefs.current[index]?.pause();
        setPlayingIndex(null);
        return;
      }

      // Stop any currently playing audio
      if (playingIndex !== null && audioRefs.current[playingIndex]) {
        audioRefs.current[playingIndex].pause();
        audioRefs.current[playingIndex].currentTime = 0; // Reset to start
      }

      // Initialize new audio if it doesn't exist
      if (!audioRefs.current[index]) {
        const newAudio = new Audio(area.audioSrc);
        newAudio.addEventListener("ended", () => {
          setPlayingIndex(null);
        });
        audioRefs.current[index] = newAudio;
      }

      // Play the new audio
      audioRefs.current[index].play();
      setPlayingIndex(index);
      
    } else if (area.type === "link") {
      if (area.target === "_blank") {
        window.open(area.href, "_blank");
      } else {
        window.location.href = area.href;
      }
    }
  };
  const areas: ImageMapArea[] = [
    // Top right navigation links
    { x: 1607.4074074074074, y: 88.31908831908832, width: 224.3304843304843, height: 35.32763532763532, href: '/aqse-overview', title: 'AQSE Overview Diagram', target: '_parent', type: "link" },
    { x: 1607.4074074074074, y: 132.47863247863248, width: 226.09686609686605, height: 35.327635327635335, href: '/aqse-documents', title: 'AQSE Documents', target: '_parent',type: "link" },
    { x: 1603.8746438746439, y: 173.1054131054131, width: 231.39601139601132, height: 37.09401709401709, href: 'https://www.aquis.eu/markets/join', title: 'AQSE Guides', target: '_blank',type: "link" },

    // Right side document sections
    { x: 1278.8603988603988, y: 492.8205128205128, width: 554.6438746438746, height: 84.78632478632483, href: '/rules-and-fees', title: 'Rules and Fees', target: '_parent',type: "link" },
    { x: 1278.8603988603988, y: 595.2706552706553, width: 554.6438746438746, height: 77.72079772079769, href: '/legal-agreements', title: 'legal agreements', target: '_parent',type: "link" },
    { x: 1275.3276353276353, y: 690.6552706552707, width: 558.1766381766381, height: 81.2535612535612, href: '/technical-specifications', title: 'technical specifications', target: '_parent',type: "link" },
    { x: 1275.3276353276353, y: 786.039886039886, width: 559.9430199430199, height: 84.78632478632483, href: '/market-data', title: 'market data', target: '_parent',type: "link" },
    { x: 1278.8603988603988, y: 888.4900284900285, width: 554.6438746438746, height: 79.48717948717945, href: '/brochures', title: 'brochures', target: '_parent',type: "link" },

    // Audio buttons (small circular elements)
    { x: 307.35042735042737, y: 266.7236467236467, width: 21.196581196581178, height: 21.196581196581235, href: '#', title: 'initiate internal audit audio', target: '_parent', type: "audio", audioSrc: "https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/1.%20Initiate%20Internal%20Audit.mp4" },
    { x: 604.1025641025641, y: 279.0883190883191, width: 28.262108262108313, height: 26.4957264957265, href: '#', title: 'engage for legal checks audio', target: '_parent', type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/1.%20Engage%20for%20legal%20Checks.mp4"},
    { x: 600.5698005698006, y: 317.94871794871796, width: 28.2621082621082, height: 26.4957264957265, href: '#', title: 'complete initial checks audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/1.%20Complete%20Initial%20Checks.mp4" },
    { x: 339.14529914529913, y: 429.2307692307692, width: 26.4957264957265, height: 24.729344729344746, href: '#', title: 'prepare financial and business plans audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/5.%20Supports%20Ir%20and%20Compliance%20Announcements.mp4" },
    { x: 611.1680911680912, y: 469.8575498575499, width: 30.028490028489955, height: 19.430199430199423, href: '#', title: 'draft admission document audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/2.%20Draft%20Admission%20Document%20Access%20or%20Prospectus%20Apex.mp4" },
    { x: 611.1680911680912, y: 498.11965811965814, width: 35.32763532763522, height: 31.794871794871767, href: '#', title: 'validate structure and contracts audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/2.%20Validate%20Structure%20and%20Contracts.mp4" },
    { x: 745.4131054131054, y: 597.0370370370371, width: 24.72934472934469, height: 24.72934472934469, href: '#', title: 'submit documents audio', target: '_parent', type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/3.%20Submit%20Documents.mp4"},
    { x: 1218.8034188034187, y: 607.6353276353276, width: 26.495726495726558, height: 28.262108262108313, href: '#', title: 'review prospectus audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/3.%20Review%20Prospectus%20(if%20main%20market).mp4" },
    { x: 1192.3076923076924, y: 648.2621082621083, width: 30.02849002849007, height: 24.72934472934469, href: '#', title: 'feedback on compliance audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/3.%20Feedback%20on%20Compliance.mp4" },
    { x: 748.9458689458689, y: 770.1424501424501, width: 22.962962962963047, height: 28.262108262108313, href: '#', title: 'request final checks audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/4.%20Request%20Final%20Checks.mp4" },
    { x: 770.1424501424501, y: 805.4700854700855, width: 38.86039886039896, height: 28.262108262108313, href: '#', title: 'address and follow up audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/4.%20Address%20follow-up%20Queries.mp4" },
    { x: 775.4415954415955, y: 937.9487179487179, width: 30.028490028489955, height: 28.262108262108313, href: '#', title: 'announce official listing dates audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/5.%20Announce%20Official%20Listing%20Date.mp4" },
    { x: 748.9458689458689, y: 976.8091168091169, width: 35.327635327635335, height: 28.2621082621082, href: '#', title: 'begin public trading audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/5.%20Begin%20public%20trading.mp4" },
    { x: 293.2193732193732, y: 998.005698005698, width: 26.4957264957265, height: 22.962962962962933, href: '#', title: 'supports IR and compliance announcements audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/5.%20Supports%20Ir%20and%20Compliance%20Announcements.mp4" },
    { x: 296.7521367521368, y: 1103.988603988604, width: 21.196581196581178, height: 26.495726495726558, href: '#', title: 'submit reports audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/6.%20Compliance%20Submit%20Reports.mp4" },
    { x: 307.35042735042737, y: 1141.082621082621, width: 26.4957264957265, height: 30.02849002849007, href: '#', title: 'monitor compliance audio', target: '_parent',type:"audio",audioSrc:"https://orcalo.blob.core.windows.net/locofy/AQSE%20Audios/6.%20Monitor%20Compliance.mp4" },

    // Main process steps
    { x: 84.78632478632478, y: 432.76353276353274, width: 243.76068376068378, height: 24.729344729344746, href: '/aqse-overview', title: 'prepare financial and business plans', target: '_parent',type: "link" },
    { x: 393.9031339031339, y: 443.3618233618234, width: 199.60113960113966, height: 44.15954415954411, href: '/admission-document-appendix-i', title: 'draft admission document', target: '_parent',type:"link" },
    { x: 607.6353276353276, y: 597.0370370370371, width: 132.47863247863256, height: 22.962962962962933, href: '/application-process', title: 'submit documents', target: '_parent',type: "link" },
    { x: 575.8404558404559, y: 801.9373219373219, width: 174.8717948717948, height: 33.56125356125358, href: '/regulatory-transaction-reporting-service-specification', title: 'address and follow up', target: '_parent',type: "link" },
    { x: 176.63817663817665, y: 1103.988603988604, width: 111.2820512820513, height: 24.729344729344803, href: '/member-participation-agreement', title: 'submit reports', target: '_parent',type: "link" },
    { x: 160.74074074074073, y: 1142.8490028490028, width: 139.54415954415956, height: 24.729344729344803, href: '/member-participation-agreement', title: 'monitor compliance', target: '_parent',type: "link" }
  ];
  return (
    <>
       <Stack sx={{ px: 4, py: 5 }} spacing={4}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Image src={LogoImage} alt="logo" />
        <Typography fontSize="1.5rem" fontWeight="bold" color="#5A5867">
          AQSE Listing Process
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography fontSize="2rem" fontWeight="bold" color="#5A5867">
          Sequence Diagram
        </Typography>
        <Button
          variant="text"
          sx={{
            fontWeight: "bold",
            fontSize: { md: "2rem", xs: "1rem" },
            color: "#5A5867",
          }}
          endIcon={
            <ExpandCircleDownOutlinedIcon
              sx={{
                width: { md: 40, xs: 20 },
                height: { md: 40, xs: 20 },
              }}
            />
          }
          onClick={()=>{setOpen(true)}}
        >
          Colour Legend
        </Button>
      </Stack>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <Image
          src={SequenceDiagramAqseImage}
          alt="AQSE Listing Sequence Diagram"
          width={imageWidth}
          height={imageHeight}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* Clickable Areas */}
        {areas.map((area, index) => (
          <Box
            key={index}
            title={area.title}
            onClick={() => handleAreaClick(area, index)}
            sx={{
              position: "absolute",
              left: `${(area.x / imageWidth) * 100}%`,
              top: `${(area.y / imageHeight) * 100}%`,
              width: `${(area.width / imageWidth) * 100}%`,
              height: `${(area.height / imageHeight) * 100}%`,
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.2)',
                border: '2px solid white',
                borderRadius:
                  area.width === area.height ? "50%" : "4px",
                cursor: "pointer",
              },
              zIndex: 10,
            }}
          />
        ))}
      </Box>
    </Stack>
    {open && (
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
                onClick={() => setOpen(false)}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "150px",
                  right: "50px",
                  background: "#fff",
                  borderRadius: "10px",
                  boxShadow: 3,
                  p: 1,
                  zIndex: 1300,
                  border:"dashed"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={ColorLegendsImage}
                  alt="Color Legend"
                  width={40}
                  height={40}
                  style={{ width: "100%", height: "100%" }}
                />
                
              </Box>
            </>
          )}
    </>
  );
}
