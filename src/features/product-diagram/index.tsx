"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ColorLegends from "./color-legends";
import Image from "next/image";
import Link from "next/link";
import { BackIconPD, ProductDiagram1, ProductDiagram2 } from "@/assets";
import { useRouter } from "next/navigation";

const ProductDiagramFeature = () => {
  const router = useRouter();

  const onBackIconClick = () => {
    router.push("/identity-gram");
  };

  return (
    <Box p={{ xs: 3, md: 4, lg: 6 }} position="relative">
      <Stack
        flexDirection="row"
        justifyContent={{ xs: "center", md: "space-between" }}
        flexWrap={"wrap"}
        alignItems="center"
      >
        <Box display="flex" alignItems="center" mr={2}>
          <Image
            src={BackIconPD}
            alt="back route icon"
            width={112}
            height={112}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h3"
            color="#0246BC"
            fontSize={{ xs: "1rem", sm: "1.5rem", md: "92px" }}
            fontWeight={600}
            ml={2}
          >
            Product Diagram
          </Typography>
        </Box>

        <ColorLegends />
      </Stack>

      <Box mt={"70px"}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              component={Link}
              href={"/ig-features"}
              sx={{ display: "block" }}
            >
              <Image
                src={ProductDiagram1}
                alt={"Identity Gram"}
                width={834}
                height={479}
                style={{ width: "100%", objectFit: "contain", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              component={Link}
              href={"/dbs-features"}
              sx={{ display: "block" }}
            >
              <Image
                src={ProductDiagram2}
                alt={"Check My DBS"}
                width={834}
                height={479}
                style={{ width: "100%", objectFit: "contain", height: "auto" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDiagramFeature;
