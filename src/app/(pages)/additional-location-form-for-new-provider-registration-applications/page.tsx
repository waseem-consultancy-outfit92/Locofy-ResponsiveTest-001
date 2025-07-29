"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Link, Stack } from "@mui/material";
import { AdditionalLocationFormForNew } from "@/assets";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "@/components/checkbox-form";

const AdditionalLocationForm = () => {
  const router = useRouter();

  const handleClick = (title: string) => {
    router.push(title);
  };

  return (
    <Stack px={5} py={3} gap={2}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={"backIcon"}
          width={40}
          height={40}
          onClick={() => {
            router.replace("/manage-location");
          }}
          style={{ cursor: "pointer" }}
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
          Additional section for information about an additional location – Manager application
        </Typography>
      </Stack>

      <CheckboxForm onChange={() => { }} />
      <Box position="relative" width="100%" height="auto">
        {/* Image */}
        <Image
          src={AdditionalLocationFormForNew}
          alt="Additional Location Form Diagram"
          width={1822}
          height={2160}
          layout="responsive"
        />

        {/* Interactive Areas */}
        <Box position="absolute" top={0} left={0} width="100%" height="100%">
          {/* Location Overview */}
          <Link
            component="button"
            onClick={() => handleClick("location-overview")}
            sx={{
              position: "absolute",
              textDecoration: "none",
              color: "transparent",
              left: "5.89%",
              top: "30.6%",
              width: "15.38%",
              height: "1.92%",
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h6">Location Overview</Typography>
          </Link>

          {/* Contact Details */}
          <Link
            component="button"
            onClick={() => handleClick("contact-details")}
            sx={{
              position: "absolute",
              textDecoration: "none",
              color: "transparent",
              left: "6.84%",
              top: "43.34%",
              width: "12.25%",
              height: "1.6%",
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h6">Contact Details</Typography>
          </Link>

          {/* Job Share Information */}
          <Link
            component="button"
            onClick={() => handleClick("job-share-information")}
            sx={{
              position: "absolute",
              textDecoration: "none",
              color: "transparent",
              left: "6.36%",
              top: "55.52%",
              width: "18.14%",
              height: "2.08%",
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h6">Job Share Information</Typography>
          </Link>

          {/* Regulated Activities */}
          <Link
            component="button"
            onClick={() =>
              handleClick(
                "regulated-activities-activities-you-are-applying-to-manage"
              )
            }
            sx={{
              position: "absolute",
              textDecoration: "none",
              color: "transparent",
              left: "7.22%",
              top: "68.33%",
              width: "17.0%",
              height: "1.6%",
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h6">Regulated Activities</Typography>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};

export default AdditionalLocationForm;
