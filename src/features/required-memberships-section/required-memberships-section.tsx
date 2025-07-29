"use client";

import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";
// import appLogo from "@/assets/appLogo.png";
import SingleImgMapPage from "@/components/single-img-map-page";
import { colorLegends, RequiredMembershipsImage } from "@/assets";
import { useCallback, useState } from "react";
import { areas } from "./required-memberships-data";
import { CommonBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";

const RequiredMembershipsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <Box p={3} position="relative">
      <Stack
        flexDirection="row"
        justifyContent={{ xs: "center", md: "space-between" }}
        flexWrap={"wrap"}
        alignItems="center"
        mt={4}
      >
        <Box display="flex" alignItems="center" mr={2}>
          <Image
            src={CommonBackIcon}
            alt="back route icon"
            width={40}
            height={40}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h3"
            color="#5A5867"
            fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
            fontWeight={600}
            ml={2}
          >
            Required Memberships
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mr={2}>
          <Typography
            component="span"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.8rem" }}
            fontWeight={600}
            color="#5A5867"
            sx={{ mr: 1 }}
          >
            Colour Legend
          </Typography>
          <KeyboardArrowDownIcon
            onClick={toggleDropdown}
            sx={{
              fontSize: { xs: 28, md: 30 },
              color: "#5A5867",
              border: "2px solid",
              borderRadius: "40px",
              cursor: "pointer",
            }}
          />
        </Box>
      </Stack>

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
              width={300}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </>
      )}

      <Box mt={4}>
        <SingleImgMapPage image={RequiredMembershipsImage} areas={areas} />
      </Box>
    </Box>
  );
};

export default RequiredMembershipsSection;
