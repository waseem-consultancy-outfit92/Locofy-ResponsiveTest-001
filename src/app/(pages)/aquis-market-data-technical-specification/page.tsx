'use client';
import React from "react";
import { Box, Stack, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import { AquisMarketDataTechnicalSpecificationImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

const AquisMarketDataSpec = () => {
  // Hotspot data with links
  const hotspots = [
    { 
      id: 1, 
      title: "Data Type", 
      x: 105.2991452991453, 
      y: 5547.509971509971, 
      width: 168.47863247863248, 
      height: 49.13960113960093,
      link: "data-types" 
    },
    { 
      id: 2, 
      title: "Message Header and Heartbeat (Table Values)", 
      x: 121.09401709401705, 
      y: 9713.846153846154, 
      width: 700.2393162393162, 
      height: 70.19943019942912,
      link: "message-header-and-heartbeat-table-values" 
    },
    // Add all other hotspots...
     { 
      id: 29, 
      title: "orderaddmessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "order-add-message" 
    },
    { 
      id: 30, 
      title: "ordercancelmessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "order-cancel-message" 
    },
     { 
      id: 31, 
      title: "ordermodifymessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "order-modify-message" 
    },
 { 
      id: 217, 
      title: "trademessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "trade-message" 
    },
{ 
      id: 4, 
      title: "tradesbustmessages", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "trades-bust-messages" 
    },
    { 
      id: 215, 
      title: "ticktabledatamessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "tick-table-data-message" 
    },
    { 
      id: 32, 
      title: "securitydefinitionmessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "security-definition-message" 
    },
    { 
      id: 213, 
      title: "securitystatusmessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "security-status-message" 
    },
{ 
      id: 21, 
      title: "aodupdatemessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "aod-update-message" 
    },
 { 
      id: 25, 
      title: "macupdatemessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "mac-update-message" 
    },
    { 
      id: 214, 
      title: "snapshotstartmessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "snapshot-start-message" 
    },
     { 
      id: 23, 
      title: "bookstatusmessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "book-status-message" 
    },
 { 
      id: 22, 
      title: "bookentrymessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "book-entry-message" 
    },
{ 
      id: 24, 
      title: "macbookentrymessage", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "mac-book-entry-message" 
    },
 { 
      id: 28, 
      title: "mmtflags", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "mmt-flags" 
    },
 { 
      id: 26, 
      title: "mdflags", 
      x: 1254.8148148148148, 
      y: 26986.415954415952, 
      width: 145.66381766381755, 
      height: 63.179487179488206,
      link: "mdflags" 
    },

    
  ];
  const Link = require("next/link");
const router = useRouter();
  return (
    <>
    <Stack>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image
            src={CommonBackIcon}
            alt={"backIcon"}
            width={40}
            height={40}
            onClick={() => {
              router.replace("/market-data");
            }}
            style={{ cursor: "pointer" }}
          />
          <Box component={Link} href={'/'} sx={{ color: '#0246BC', fontSize: '40px', fontWeight: '500', textDecoration: 'underline', lineHeight: '1.2' }}>
            Reference Doc
          </Box>
        </Box>
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "24", sm: "26px", md: "32px" }}
          fontWeight={{ md: 600, xs: 500 }}
          mt={3}
          sx={{
            fontFamily: "inherit",
            lineHeight: '1.25',
          }}
        >
         Aquis Market Data Technical Specification
        </Typography>
      </Stack>
 
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Image */}
      <Image
        src={AquisMarketDataTechnicalSpecificationImage}
        alt="Aquis Market Data Technical Specification"
        width={1848}
        height={27490}
        style={{ width: "100%", height: "auto" }}
      />

      {/* Interactive SVG Overlay */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1848 27490"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <style>
          {`
            .image-mapper-shape {
              fill: rgba(0, 0, 0, 0);
            }
            .image-mapper-shape:hover {
              stroke: white;
              stroke-width: 2px;
              opacity: 0.2;
            }
          `}
        </style>

        {hotspots.map((spot) => (
          <Tooltip key={spot.id} title={spot.title} arrow>
            <a 
              href={spot.link} 
              style={{ pointerEvents: "auto" }}
              target="_parent"
            >
              <rect
                x={spot.x}
                y={spot.y}
                width={spot.width}
                height={spot.height}
                className="image-mapper-shape"
                data-index={spot.id}
                style={{ cursor: "pointer" }}
              />
            </a>
          </Tooltip>
        ))}
      </svg>
    </Box>
    </>

  );
};

export default AquisMarketDataSpec;