"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { ConnectivityGuideImage } from "@/assets";
import { Stack } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

const MarketDataOrderFormPage = () => {
  const router = useRouter();

  const areas = [
    {
      id: 1,
      title: "Market Data Splits",
      href: "/market-data-splits",
      x: 105.29914529914531,
      y: 3088.7749287749293,
      width: 266.75783475783476,
      height: 43.87464387464388,
    },
    {
      id: 2,
      title: "Aquis Exchange PLC MTF MaC (AQXE)",
      href: "/aquis-exchange-plc-mtf-mac-aqxe",
      x: 61.42450142450142,
      y: 4224.250712250712,
      width: 559.8404558404559,
      height: 50.89458689458661,
    },
    {
      id: 3,
      title: "BGP Cross Connects/Circuits Diagram Details",
      href: "/bgp-cross-connects-circuits-diagram-details",
      x: 100.03418803418802,
      y: 8072.934472934473,
      width: 670.4045584045584,
      height: 63.179487179487296,
    },
    {
      id: 4,
      title: "Meshed BGP Cross Connect/Circuit Diagram Details",
      href: "/meshed-bgp-cross-connects",
      x: 96.52421652421654,
      y: 9197.880341880342,
      width: 752.8888888888889,
      height: 56.15954415954366,
    },
    {
      id: 5,
      title: "Directly Connected Servers Diagram Details",
      href: "/directly-connected-servers",
      x: 107.0541310541311,
      y: 10322.826210826212,
      width: 637.0598290598291,
      height: 56.15954415954366,
    },
    {
      id: 6,
      title:
        "Directly Attached Servers Layer-2 Cross-connect/Circuits Separate Member Sites/Infrastructure Diagram Details",
      href: "/directly-attached-servers-layer-2-cross-connect",
      x: 117.58404558404558,
      y: 11456.547008547008,
      width: 1618.0968660968663,
      height: 52.64957264957229,
    },
    {
      id: 7,
      title: "Directly Connected Servers and BGP Diagram Details",
      href: "/directly-connected-servers-and-bgp-cross-connects",
      x: 103.54415954415954,
      y: 12569.207977207976,
      width: 782.7236467236467,
      height: 68.44444444444343,
    },
    {
      id: 8,
      title:
        "Directly Connected Servers and BGP Cross Connects/Circuits separate Member sites/infrastructure. Diagram Details",
      href: "/directly-connected-servers-and-bgp-cross-connects-loc",
      x: 105.29914529914514,
      y: 13711.703703703703,
      width: 1660.2165242165242,
      height: 40.364672364672515,
    },
    {
      id: 9,
      title: "TCP Targets for Aquis Stock Exchange (AQSE) Market",
      href: "/tcp-targets-foraqxe-and-aqeu-mft",
      x: 100.03418803418813,
      y: 15503.544159544159,
      width: 937.162393162393,
      height: 47.384615384615245,
    },
    {
      id: 10,
      title: "Multicast",
      href: "/multicast",
      x: 105.2991452991453,
      y: 16614.450142450147,
      width: 175.49857549857555,
      height: 59.6695156695132,
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
          Connectivity Guide
        </Typography>
      </Stack>
      <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
        <Image
          src={ConnectivityGuideImage}
          alt="Connectivity Guide"
          width={1848}
          height={19284}
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
                  top: `${(area.y / 19284) * 100}%`,
                  width: `${(area.width / 1848) * 100}%`,
                  height: `${(area.height / 19284) * 100}%`,
                }}
              />
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Stack>
  );
};

export default MarketDataOrderFormPage;
