"use client";
<<<<<<< HEAD
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
=======
import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";
interface CommonPageProps {
  src: string | StaticImageData;
  backRoute?: string;
  pageTitle: string;
  onChange?: (selectedValue: string, page: string) => void;
  amendmentButtonRoute?: string;
}

const CommonPage: React.FC<CommonPageProps> = ({
  src,
  backRoute = "/",
  pageTitle,
  onChange,
  amendmentButtonRoute,
}) => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
<<<<<<< HEAD
  }, [router]);
  const onAmendmentButtonClick = useCallback(() => {
    window.open(amendmentButtonRoute, "_blank"); // _blank opens in new tab
  }, [amendmentButtonRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          mt={{ md: 2, xs: 1 }}
          mb={{ md: 4, sm: 3, xs: 2 }}
=======
  }, [router, backRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={pageTitle}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "inherit" }}
>>>>>>> 311798dbf2427fd775548e42ccba2356d29afc0f
        >
          <Image
            src={CommonBackIcon}
            alt={pageTitle}
            width={40}
            height={40}
            onClick={onBackIconClick}
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
            {pageTitle}
          </Typography>
        </Stack>
        {amendmentButtonRoute && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5A5867",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#4A4857",
              },
              cursor: "pointer",
              fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
              padding: { xs: "6px 12px", md: "8px 16px" },
              textTransform: "capitalize",
            }}
            onClick={onAmendmentButtonClick}
          >
            Reference Document
          </Button>
        )}
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={onChange} />
      </Box>
      <Image
        src={src}
        alt={pageTitle}
        width={40}
        height={40}
        style={{ width: "100%", height: "100%", padding: "20px" }}
      />
    </Box>
  );
};

export default CommonPage;
