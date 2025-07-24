"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Link, Stack } from "@mui/material";
import { RemoveaLocation } from "@/assets";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import { CommonBackIcon } from "@/assets/common-assets";
const RemoveLocationImageMap = () => {
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
          Remove a Location
        </Typography>
      </Stack>
      <CheckboxForm onChange={() => { }} />
      <Box position="relative" width="100%" height="auto">
        {/* Image */}
        <Image
          src={RemoveaLocation} // Update path as needed
          alt="Remove Location Diagram"
          width={1848}
          height={3225}
          layout="responsive"
        />

        {/* Interactive Areas */}
        <Box position="absolute" top={0} left={0} width="100%" height="100%">
          {/* Application Details */}
          <Link
            component="button"
            onClick={() => handleClick("/application-details")}
            sx={{
              position: "absolute",
              textDecoration: "none",
              color: "transparent",
              left: "6.74%",
              top: "18.4%",
              width: "15.67%",
              height: "0.98%",
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h6">Application Details</Typography>
          </Link>

          {/* Other Information */}
          <Link
            component="button"
            onClick={() => handleClick("/other-information")}
            sx={{
              position: "absolute",
              color: "transparent",
              textDecoration: "none",
              left: "6.93%",
              top: "26.5%",
              width: "14.53%",
              height: "1.2%",
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h6">Other Information</Typography>
          </Link>

          {/* Location (s) to Remove */}
          <Link
            component="button"
            onClick={() => handleClick("the-location-you-want-to-remove")}
            sx={{
              position: "absolute",
              left: "7.03%",
              color: "transparent",
              textDecoration: "none",
              top: "35.05%",
              width: "17.19%",
              height: "1.52%",
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h6">Location (s) to Remove</Typography>
          </Link>

          {/* Application Declaration */}
          <Link
            component="button"
            onClick={() => handleClick("application-declarion-remove-location")}
            sx={{
              position: "absolute",
              left: "7.03%",
              color: "transparent",
              textDecoration: "none",
              top: "57.86%",
              width: "18.99%",
              height: "1.52%",
              "&:hover": {
                border: "2px solid white",
                opacity: 0.2,
                borderRadius: "4px",
              },
            }}
          >
            <Typography variant="h6">Application Declaration</Typography>
          </Link>

          {/* Submission Instructions */}
          <Link
            component="button"
            onClick={() => handleClick("how-to-submit-this-application")}
            sx={{
              position: "absolute",
              left: "7.12%",
              top: "84.53%",
              width: "17.95%",
              height: "1.74%",
              color: 'transparent',
              textDecoration: 'none'
            }}
          >
            <Typography variant="h6">Submission Instructions</Typography>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};

export default RemoveLocationImageMap;
