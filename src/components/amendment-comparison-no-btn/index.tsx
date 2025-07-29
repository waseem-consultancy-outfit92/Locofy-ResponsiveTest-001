"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";

interface CommonPageProps {
  src: string | StaticImageData;
  backRoute?: string; // backRoute is always a string or undefined
  pageTitle: string;
  onChange?: (selectedValue: string, page: string) => void;
  amendmentButtonRoute?: string; // Make this optional
  amendmentButtonTitle?: string; // New prop for button title
}

const AmendmentComparisonNoBtn: React.FC<CommonPageProps> = ({
  src,
  backRoute,
  pageTitle,
  onChange,
}) => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    if (backRoute) {
      router.push(backRoute);
    } else {
      router.back();
    }
  }, [router, backRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        mt={{ md: 2, xs: 4 }}
        mb={{ md: 4, sm: 3, xs: 4 }}
        gap={{ xs: 2, md: 0 }}
      >
        <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1}>
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
            sx={{ fontFamily: "Outfit, inherit" }}
          >
            {pageTitle}
          </Typography>
        </Box>
      </Stack>

      {/* Checkbox and Button Row */}
      <Box
        mb={{ md: 4, sm: 3, xs: 2 }}
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "left" }}
        justifyContent="space-between"
        gap={2}
      >
        <Box flexGrow={1}>
          <CheckboxForm onChange={onChange} />
        </Box>
      </Box>
      <Image
        src={src}
        alt={pageTitle}
        width={40}
        height={40}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};
export default AmendmentComparisonNoBtn;
