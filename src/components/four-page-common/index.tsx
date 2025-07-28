"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";

interface CommonPageProps {
src: StaticImageData[]; // Now expects an array of images
  backRoute?: string;
  pageTitle: string;
  onChange?: (selectedValue: string, page: string) => void;
  imageLinks?: string[]; // Optional: links for each image
}

const FourPageCommon: React.FC<CommonPageProps> = ({
  src,
  backRoute = "/",
  pageTitle,
  onChange,
  imageLinks = ["/", "/", "/", "/"], 
}) => {
  const router = useRouter();
  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  const handleImageClick = (idx: number) => {
    if (imageLinks[idx]) router.push(imageLinks[idx]);
  };

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
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
        >
          {pageTitle}
        </Typography>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={onChange} />
      </Box>
      <Box sx={{mb:2}}>
       <Typography
          variant="h2"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{ fontFamily: "inherit" }}
        >
        Appendix
        </Typography>
      </Box>

      <Stack direction={{ xs: "column" }} spacing={2}>
        {src.map((img, idx) => (
          <Box
            key={idx}
            sx={{ flex: 1, cursor: "pointer" }}
            onClick={() => handleImageClick(idx)}
          >
            <Image
              src={img}
              alt={pageTitle + " " + (idx + 1)}
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
export default FourPageCommon;
