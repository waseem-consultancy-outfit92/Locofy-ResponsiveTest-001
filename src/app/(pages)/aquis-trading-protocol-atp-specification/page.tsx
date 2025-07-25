"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Box,
  Tooltip,
  Typography,
  //   Drawer,
  //   IconButton,
  //   List,
  //   ListItem,
  //   ListItemText,
  //   Divider,
  //   AppBar,
  //   Toolbar,
  //   useTheme,
  //   useMediaQuery,
  Stack,
} from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";
import { AquisTradingProtocolSpecificationImageMain } from "@/assets";
import Link from "next/link";
import { CommonBackIcon } from "@/assets/common-assets";
// import { CheckboxForm } from "@/components/checkbox-form";

// interface InteractiveArea {
//   id: number;
//   title: string;
//   x: number;
//   y: number;
//   width: number;
//   height: number;
//   description?: string;
//   pageUrl: string;
// }

const AquisTradingProtocolSpecification = () => {
  const router = useRouter();

  // Original image dimensions
//   const imageWidth = 1848;
//   const imageHeight = 6863;

  // All interactive areas from your SVG
  const areas = [
    {
      id: 1,
      title: "Restricted Orders",
      href: "/restricted-orders",
      x: 986.3019943019943,
      y: 1384.6837606837607,
      width: 254.47293447293453,
      height: 36.854700854700695,
    },
    {
      id: 2,
      title: "Data Types",
      href: "/data-types",
      x: 107.05413105413105,
      y: 2002.4387464387464,
      width: 180.76353276353274,
      height: 38.609686609686605,
    },
    {
      id: 3,
      title: "Login Message",
      href: "/login-message",
      x: 512.4558404558404,
      y: 2355.190883190883,
      width: 226.39316239316247,
      height: 38.60968660968683,
    },
    {
      id: 4,
      title: "Login Response Message",
      href: "/login-response-message",
      x: 1205.6752136752136,
      y: 2349.925925925926,
      width: 373.8119658119658,
      height: 42.11965811965774,
    },
    {
      id: 5,
      title: "Heartbeat",
      href: "/heartbeat",
      x: 150.92877492877494,
      y: 2597.378917378917,
      width: 159.70370370370364,
      height: 40.364672364672515,
    },
    {
      id: 7,
      title: "Logout Request Message",
      href: "/logout-request-message",
      x: 758.1538461538462,
      y: 2604.3988603988605,
      width: 372.0569800569799,
      height: 43.87464387464388,
    },
    {
      id: 8,
      title: "Logout Message",
      href: "/logout-message",
      x: 1270.6096866096866,
      y: 2599.133903133903,
      width: 245.69800569800577,
      height: 47.3846153846157,
    },
    {
      id: 9,
      title: "Order Add Message",
      href: "/order-add-message",
      x: 142.15384615384616,
      y: 2932.5811965811968,
      width: 298.3475783475783,
      height: 42.11965811965774,
    },
    {
      id: 10,
      title: "Order Add Extended Message",
      href: "/order-add-extended-message",
      x: 1202.1652421652423,
      y: 2929.071225071225,
      width: 442.25641025641016,
      height: 47.3846153846157,
    },
    {
      id: 11,
      title: "Order Sweeps Order Entry",
      href: "/order-sweeps-order-entry",
      x: 143.9088319088319,
      y: 3199.3390313390314,
      width: 379.0769230769231,
      height: 36.854700854700695,
    },
    {
      id: 12,
      title: "Order Cancel Message",
      href: "/order-cancel-message",
      x: 679.1794871794872,
      y: 3199.3390313390314,
      width: 328.18233618233614,
      height: 38.60968660968638,
    },
    {
      id: 13,
      title: "Order Modify Message",
      href: "/order-modify-message",
      x: 147.4188034188034,
      y: 3462.5868945868947,
      width: 329.93732193732194,
      height: 43.87464387464388,
    },
    {
      id: 14,
      title: "Order Add Response Message",
      href: "/order-add-response-message",
      x: 1205.6752136752136,
      y: 3448.5470085470088,
      width: 438.7464387464388,
      height: 43.874643874643425,
    },
    {
      id: 29,
      title: "Order Modify Extended Message",
      href: "/order-modify-extended-message",
      x: 319.5099715099715,
      y: 3725.834757834758,
      width: 463.3162393162394,
      height: 45.62962962962956,
    },
    {
      id: 15,
      title: "Order Cancel Response Message",
      href: "/order-cancel-response-message",
      x: 619.5099715099715,
      y: 3725.834757834758,
      width: 463.3162393162394,
      height: 45.62962962962956,
    },
    {
      id: 16,
      title: "Order Modify Response Message",
      href: "/order-modify-response-message",
      x: 149.17378917378917,
      y: 3994.3475783475783,
      width: 461.5612535612536,
      height: 47.384615384615245,
    },
    {
      id: 17,
      title: "Trade Capture Message",
      href: "/trade-capture-message",
      x: 731.8290598290598,
      y: 3994.3475783475783,
      width: 340.4672364672365,
      height: 45.62962962962956,
    },
    {
      id: 18,
      title: "Trade Capture Response Message",
      href: "/trade-capture-response-message",
      x: 1214.4501424501425,
      y: 3952.22792022792,
      width: 494.9059829059829,
      height: 54.40455840455843,
    },
    {
      id: 19,
      title: "Iceberg Order Refresh Message",
      href: "/iceberg-order-refresh-message",
      x: 147.41880341880346,
      y: 4254.08547008547,
      width: 438.7464387464388,
      height: 52.6495726495732,
    },
    {
      id: 20,
      title: "Trade Bust Message",
      href: "/trade-bust-message",
      x: 724.8091168091169,
      y: 4259.350427350427,
      width: 301.8575498575501,
      height: 47.384615384616154,
    },
    {
      id: 21,
      title: "Trade Message",
      href: "/trade-message",
      x: 1221.4700854700855,
      y: 4217.2307692307695,
      width: 215.8632478632478,
      height: 43.87464387464388,
    },
    {
      id: 22,
      title: "IOI Add Message",
      href: "/ioi-add-message",
      x: 147.4188034188034,
      y: 4519.088319088319,
      width: 245.69800569800572,
      height: 52.6495726495732,
    },
    {
      id: 23,
      title: "IOI Invite Message",
      href: "/ioi-invite-message",
      x: 675.6695156695157,
      y: 4524.353276353277,
      width: 273.7777777777777,
      height: 45.62962962962956,
    },
    {
      id: 24,
      title: "IOI Firmup",
      href: "/ioi-firmup",
      x: 1203.920227920228,
      y: 4520.843304843304,
      width: 171.98860398860393,
      height: 54.404558404558884,
    },
    {
      id: 25,
      title: "Order Status",
      href: "/order-status",
      x: 110.56410256410261,
      y: 4912.205128205128,
      width: 1609.3219373219376,
      height: 45.62962962962956,
    },
    {
      id: 26,
      title: "Modification Reasons",
      href: "/modification-reasons",
      x: 110.56410256410257,
      y: 5156.148148148148,
      width: 305.36752136752136,
      height: 43.87464387464388,
    },
    {
      id: 27,
      title: "Cancel Reasons",
      href: "/cancel-reasons",
      x: 512.4558404558404,
      y: 5152.638176638177,
      width: 236.9230769230769,
      height: 56.159544159544566,
    },
    {
      id: 28,
      title: "Reject Reasons",
      href: "/reject-reasons",
      x: 115.82905982905983,
      y: 5624.729344729345,
      width: 1568.957264957265,
      height: 47.384615384615245,
    },
  ];

//   const navigateToPage = (url: string) => {
//     router.push(url);
//   };

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
          Aquis Exchange Market Data
        </Typography>
      </Stack>

      <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
        <Image
          src={AquisTradingProtocolSpecificationImageMain}
          alt="Aquis Trading Protocol (ATP) Specification"
          width={1848}
          height={6863}
          layout="responsive"
        />

        {areas.map((area) => (
          <Tooltip key={area.id} title={area.title} arrow>
            <Link href={area.href} passHref legacyBehavior>
              <Box
                component="a"
                sx={{
                  position: "absolute",
                  left: `${(area.x / 1848) * 100}%`,
                  top: `${(area.y / 6863) * 100}%`,
                  width: `${(area.width / 1848) * 100}%`,
                  height: `${(area.height / 6863) * 100}%`,
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

export default AquisTradingProtocolSpecification;
