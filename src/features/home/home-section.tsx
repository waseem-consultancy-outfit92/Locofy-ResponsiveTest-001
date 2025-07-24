"use client";

import Link from "next/link";
import Image from "next/image";
import { apprenticeshipsLogo, colorLegends, mainSection } from "@/assets";
import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onBackIconClick = () => {
    router.push("/apprenticeshipjourney-1");
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

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
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Box sx={{ p: 3, position: "relative" }}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={apprenticeshipsLogo}
          alt={"Apprenticeship logo "}
          width={180}
          height={50}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{
            fontFamily: "inherit",
          }}
        >
          Apprenticeship Journey
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        alignItems={"center"}
        justifyContent="space-between"
        flexWrap={"wrap"}
        mt={2}
      >
        <Typography
          variant="h3"
          my={3}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
        >
          Sequence Diagram
        </Typography>

        <Typography
          variant="h3"
          my={3}
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "1.8rem" }}
          fontWeight={600}
          textTransform={"uppercase"}
          ml={2}
        >
          Colour Legend{" "}
          <span ref={iconRef}>
            <KeyboardArrowDownIcon
              sx={{
                fontSize: "25px",
                border: "2px solid",
                borderRadius: "40px",
                cursor: "pointer",
              }}
              onClick={toggleDropdown}
            />
          </span>
        </Typography>
      </Stack>

      <Box
        sx={{
          border: "3px dashed #000",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <Stack
          flexDirection="row"
          alignItems={"center"}
          justifyContent="space-between"
          flexWrap={"wrap"}
          mb={5}
        >
          <Typography
            variant="h3"
            my={3}
            color="#5A5867"
            fontSize={{ xs: "1rem", md: "1.5em" }}
            fontWeight={600}
            ml={2}
          >
            {/* End-to-End Mental health Listing Process */}
          </Typography>

          <Link
            href="/apprenticeshipjourney-1"
            style={{ textDecoration: "none" }}
          >
            <Button
              sx={{
                color: "#000",
                backgroundColor: "#F2EBEB",
                border: "1px solid",
                textTransform: "capitalize",
                fontWeight: 600,
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              🔗Apprenticeship Journey
            </Button>
          </Link>
        </Stack>

        <Image
          src={mainSection}
          alt="Hero Image"
          width={40}
          height={40}
          style={{ width: "100%", height: "100%" }}
        />

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
    </Box>
  );
};
