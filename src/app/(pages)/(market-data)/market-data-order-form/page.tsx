"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import { MarketDataOrderFormImage } from "@/assets";
import { Stack } from "@mui/material";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";

const MarketDataOrderFormPage = () => {
  const router = useRouter();
  const areas = [
    {
      id: 1,
      title: "Customer Information",
      href: "/market-data-customer-information",
      x: 119.33903133903134,
      y: 961.7321937321938,
      width: 231.65811965811963,
      height: 35.09971509971501,
    },
    {
      id: 2,
      title: "Receipt of Data",
      href: "/market-data-receipt-of-data",
      x: 238.67806267806267,
      y: 1314.4843304843305,
      width: 229.90313390313392,
      height: 40.36467236467229,
    },
    {
      id: 3,
      title: "Commencement Date (dd/mm/yyyy)",
      href: "/market-data-use-of-data",
      x: 131.6239316239316,
      y: 1907.6695156695157,
      width: 514.2108262108262,
      height: 43.87464387464388,
    },
    {
      id: 4,
      title: "Contact Categories",
      href: "/market-data-contact-information",
      x: 129.86894586894587,
      y: 2909.766381766382,
      width: 301.8575498575499,
      height: 43.87464387464388,
    },
    {
      id: 5,
      title: "Affiliates List",
      href: "/market-data-affiliates-and-service-providers",
      x: 138.64387464387465,
      y: 3855.7037037037035,
      width: 184.27350427350433,
      height: 49.13960113960138,
    },
    {
      id: 6,
      title: "Direct Connection (Physical Connections Quantity)",
      href: "/market-data-connectivity",
      x: 805.5384615384617,
      y: 4975.384615384615,
      width: 703.7492877492878,
      height: 50.89458689458661,
    },
  ];

  // function setOpen(arg0: boolean) {
  //   throw new Error("Function not implemented.");
  // }

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
              router.replace("/market-data");
            }}
            style={{ cursor: "pointer" }}
          />
          <Box
            component={Link}
            href={
              "https://aqx-web-prod-s3-public-read.s3.eu-west-2.amazonaws.com/Aquis_Market_Data_Fee_Schedule_effective_1_April_2025_8d1ca3a638.pdf"
            }
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
          Market Data Order Form
        </Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box mb={{ md: 4, sm: 3, xs: 2 }}>
          <CheckboxForm onChange={() => {}} />
        </Box>
      </Stack>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
          marginTop: "0PX",
        }}
      >
        <Image
          src={MarketDataOrderFormImage}
          alt="Market Data Order Form"
          width={1848}
          height={6144}
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
                  top: `${(area.y / 6144) * 100}%`,
                  width: `${(area.width / 1848) * 100}%`,
                  height: `${(area.height / 6144) * 100}%`,
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
