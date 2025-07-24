"use client";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
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
  }, [router, backRoute]);

  const onAmendmentButtonClick = useCallback(() => {
    if (amendmentButtonRoute) {
      router.push(amendmentButtonRoute);
    }
  }, [router, amendmentButtonRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
        spacing={2}
      >
        <Image
          src={CommonBackIcon}
          alt="Back"
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer", marginTop: 12, marginRight: 8 }}
        />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          sx={{ fontFamily: "inherit" }}
        >
          {pageTitle}
        </Typography>
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
      <Box sx={{ width: "100%", padding: "20px" }}>
        <Image
          src={src}
          alt={pageTitle}
          layout="responsive"
          width={800}
          height={400}
        />
      </Box>
    </Box>
  );
};

export default CommonPage;