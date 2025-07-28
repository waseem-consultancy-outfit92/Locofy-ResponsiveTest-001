"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Box, Tooltip, Typography, Stack } from "@mui/material";
import Link from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
import { DropCopySpecificationsImage } from "@/assets";

// interface InteractiveArea {
//   id: number;
//   title: string;
//   x: number;
//   y: number;
//   width: number;
//   height: number;
//   href: string;
// }

const DropCopySpecifications = () => {
  const router = useRouter();

  // Original image dimensions
  const imageWidth = 1842;
  const imageHeight = 5851;

  // All interactive areas from your SVG
  const areas = [
    {
      id: 1,
      title: "FIX Message Header and Trailer",
      href: "/message-header-section1",
      x: 78.71794871794872,
      y: 1516.6324786324785,
      width: 467.0598290598291,
      height: 52.47863247863256,
    },
    {
      id: 2,
      title: "Drop Copy Report Messages",
      href: "/drop-copy-report-messages",
      x: 78.71794871794869,
      y: 4423.948717948718,
      width: 405.83475783475785,
      height: 52.47863247863279,
    },
    {
      id: 3,
      title: "Trade Capture Report Acknowledgement (MsgType=AR)",
      href: "/trade-capture-report-acknowledgement",
      x: 101.45868945868946,
      y: 5169.145299145299,
      width: 790.6780626780627,
      height: 54.22792022792055,
    },
    {
      id: 4,
      title: "Outcome",
      href: "/trade-capture-report-acknowledgement",
      x: 34.98575498575499,
      y: 5529.4985754985755,
      width: 136.44444444444443,
      height: 50.72934472934503,
    },
  ];

  return (
    <Stack px={5} py={3} gap={"40px"}>
      <Stack>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            src={CommonBackIcon}
            alt={"backIcon"}
            width={40}
            height={40}
            onClick={() => {
              router.replace("/technical-specifications");
            }}
            style={{ cursor: "pointer" }}
          />
          <Box
            component={Link}
            href={"/"}
            sx={{
              color: "#0246BC",
              fontSize: "40px",
              fontWeight: "500",
              textDecoration: "underline",
              lineHeight: "1.2",
            }}
          >
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
            lineHeight: "1.25",
          }}
        >
          Drop Copy Specifications
        </Typography>
      </Stack>
      <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
        <Image
          src={DropCopySpecificationsImage}
          alt="Drop Copy Specifications"
          width={imageWidth}
          height={imageHeight}
          layout="responsive"
        />

        {areas.map((area) => (
          <Tooltip key={area.id} title={area.title} arrow>
            <Link href={area.href} passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  position: "absolute",
                  left: `${(area.x / imageWidth) * 100}%`,
                  top: `${(area.y / imageHeight) * 100}%`,
                  width: `${(area.width / imageWidth) * 100}%`,
                  height: `${(area.height / imageHeight) * 100}%`,
                  "&:hover": {
                    outline: "2px solid white",
                    opacity: 0.2,
                  },
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Stack>
  );
};

export default DropCopySpecifications;
